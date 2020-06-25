import React, {useEffect, useState, useRef} from "react";
import {
    Form, FormGroup, InputGroup, InputGroupAddon, FormInput, Button, InputGroupText, FormCheckbox
} from "shards-react";
import {useCart} from "../../utils/CartContext";
import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import {Helmet} from "react-helmet";
import ProductsList from "../../components/shop/ProductsList";
import {Redirect} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {shippingDataValidate} from "../../utils/helpers";
import {useCurrency} from "../../utils/CurrencyContext";
import GoogleService from "../../utils/GoogleService";
import AsyncSelect from "react-select/async/dist/react-select.esm";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import Coupon from "../../components/shop/Coupon";
import PaymentProgress from "../../components/shop/PaymentProgress";
import {useAuth} from "../../utils/AuthContext";
import OrderService from "../../utils/OrderService";

function Checkout() {
    const cart = useCart();
    const auth = useAuth();
    const currency = useCurrency();

    const coupon = cart.state.coupon;

    const [products, setProducts] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [terms, setTerms] = useState(false);
    const [invalids, setInvalids] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [pendingState, setPendingState] = useState(0);

    const paypalRef = useRef();

    function searchForAddress(input, callback) {
        GoogleService.addressSearch(input, callback);
    }

    useEffect(() => {
        const order = OrderService.fromCookie();

        if(order){
            setName(order.details.name);
            setEmail(order.details.email);
            setAddress(order.details.address);
            setZipCode(order.details.zip_code);
            setTerms(true);
        }
    }, []);

    useEffect(() => {
        (async function() {
            const products = await ProductService.cart(cart.state.products);

            products.length ? setProducts(products) : setRedirect(true);
        })();
    }, [cart.state, currency.state]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email: (auth.state.user && auth.state.user.email) ?? email,
            name,
            address,
            zip_code: zipCode,
            terms,
            products,
            coupon: cart.state.coupon.code
        };

        const validation = shippingDataValidate(credentials);

        setInvalids(validation.invalids);

        if (validation.passed && pendingState <= 0) {
            setPendingState(-1);
            setTimeout(() => {
                setPendingState(1);

                OrderService.make(credentials)
                    .then(response => {
                        OrderService.toCookie(response.data.order);

                        setPendingState(2);
                        const script = document.createElement("script");
                        script.src = `https://www.paypal.com/sdk/js?client-id=${response.data.paypalClientId}&currency=${currency.state.iso}`;
                        script.addEventListener("load", () => loadPaypal());
                        document.body.appendChild(script);
                    })
                    .catch(error => {
                        setPendingState(0);
                        notify.show(error.response.data);
                    });
            }, 1000);
        }
    };

    function loadPaypal() {
        setPendingState(3);

        const sum = coupon.percent_off ? OrderService.getSumOfProductsWithDiscount(products, coupon) : OrderService.getSumOfProducts(products);

        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    application_context: {
                        user_action: "PAY_NOW"
                    },
                    purchase_units: [{
                        description: "Shop-template order",
                        amount: {
                            currency_code: currency.state.iso,
                            value: sum,
                            breakdown: {
                                item_total: {
                                    currency_code: currency.state.iso,
                                    value: sum,
                                },
                            }
                        },

                    }]
                })
            },
            onApprove: (data, actions) => {
                OrderService.clearCookie();
                cart.dispatch({type: 'reset'});
                
                setPendingState(4);

                setTimeout(() => setRedirect(true), 2000);

            },
            onCancel: () => {
                setTimeout(() => setPendingState(-2), 1000);
                setTimeout(() => setPendingState(0), 2500);
            },
            onError: err => {
                console.error(err);
            }
        })
            .render(paypalRef.current);
    }

    return (
        <>
            {redirect && <Redirect to="/"/>}
            <Helmet>
                <title>Shop | Checkout</title>
            </Helmet>
            {(pendingState > -2 && pendingState < 1) ?
                <div
                    className={`row w-100 my-5 align-items-center justify-content-center ${pendingState < 0 && "animated fadeOutDown fast"}`}
                    style={{zIndex: 1}}>
                    <h1 className="col-12 text-center pb-5 mb-4">Checkout</h1>
                    <div className="col-lg-9 col-12">
                        <ProductsList
                            data={products}
                            sum={OrderService.getSumOfProducts(products)}
                            sumWithDiscount={coupon.code && OrderService.getSumOfProductsWithDiscount(products, coupon)}
                        />
                        <Coupon coupon={coupon ?? {}}/>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <Form onSubmit={handleSubmit}>
                            <h4 className="my-4">Please fill all the shipment data:</h4>
                            {!auth.user &&
                            <FormGroup>
                                <label htmlFor="email">Email</label>
                                <InputGroup seamless>
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput invalid={invalids.includes("email")}
                                               type="email"
                                               id="email"
                                               onChange={e => setEmail(e.target.value)}
                                               defaultValue={email}
                                               disabled={pendingState > 0}/>
                                </InputGroup>
                            </FormGroup>
                            }
                            <FormGroup>
                                <label htmlFor="name">Full name</label>
                                <InputGroup seamless>
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faUser}/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput invalid={invalids.includes("name")}
                                               type="text"
                                               id="name"
                                               onChange={e => setName(e.target.value)}
                                               defaultValue={name}
                                               disabled={pendingState > 0}/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="address">Address</label>
                                <AsyncSelect
                                    onChange={e => setAddress(e.value)}
                                    inputProps={{id: 'address'}}
                                    loadOptions={searchForAddress}
                                    value={{ label: address, value: address }}
                                    disabled={pendingState > 0}
                                    styles={{
                                        menu: provided => ({
                                            ...provided,
                                            zIndex: 10,
                                            textAlign: "justify",
                                        }),
                                        container: provided => ({
                                            ...provided,
                                            border: invalids.includes("address") ? "1px solid red" : null,
                                            borderRadius: ".375rem",
                                        }),
                                        valueContainer: provided => ({
                                            ...provided,
                                            cursor: "text",
                                        })
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="zipCode">ZIP Code</label>
                                <InputGroup seamless>
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{zIndex: 1}}/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput invalid={invalids.includes("zipCode")}
                                               type="text"
                                               id="zipCode"
                                               defaultValue={zipCode}
                                               onChange={e => setZipCode(e.target.value)}
                                               disabled={pendingState > 0}/>
                                </InputGroup>
                            </FormGroup>
                            <FormCheckbox
                                onChange={() => {
                                    setTerms(!terms)
                                }}
                                checked={terms}
                                className="my-4"
                                invalid={invalids.includes("terms")}
                            >
                                I agree with the terms and conditions of usage The Shop.
                            </FormCheckbox>
                            <Button block size="lg" color="success" className="mt-4">Proceed to payment</Button>
                        </Form>
                    </div>
                </div>
                : (pendingState > 0 && pendingState < 4) ?
                    <PaymentProgress pendingState={pendingState} ref={paypalRef}/>
                    : pendingState === -2 ?
                        <FontAwesomeIcon size="6x" icon={faTimesCircle} className="animated bounceIn text-danger"/>
                        :
                        <FontAwesomeIcon size="6x" icon={faCheckCircle} className="animated bounceIn text-success"/>
            }
        </>
    );
}

export default Checkout;
