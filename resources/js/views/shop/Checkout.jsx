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
import ShippingForm from "../../components/shop/ShippingForm";
import Translate from "../../components/Translate";

function Checkout() {
    const cart = useCart();
    const auth = useAuth();
    const currency = useCurrency();

    const coupon = cart.state.coupon;

    const [products, setProducts] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [placeId, setPlaceId] = useState('');
    const [shippingAddress, setShippingAddress] = useState();
    const [zipCode, setZipCode] = useState('');
    const [terms, setTerms] = useState(false);
    const [invalids, setInvalids] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [pendingState, setPendingState] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);

    /** pendingState meaning:
     *  -2: canceled
     *  -1: animation
     *   0: address form
     *   1: animation address form
     *   2: animation shipping form
     *   3: creating order
     *   4: loading payment
     *   5: processing payment
     *   6: approved
     */

    const credentials = {
        email: (auth.state.user && auth.state.user.email) ?? email,
        name,
        address,
        place_id: placeId,
        shipping_address: shippingAddress,
        zip_code: zipCode,
        terms,
        products,
        coupon: cart.state.coupon.code
    };

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
            setShippingAddress(order.shipping_address);
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

    function validateData(){
        const validation = shippingDataValidate(credentials);

        setInvalids(validation.invalids);

        if (validation.passed && pendingState <= 0) {
            const country = OrderService.getCountry(address);

            if(country){
                setPendingState(1);
                setTimeout(() => setPendingState(2), 1000);
            }
            else
                notify.show("Unfortunately, we are not delivering to your specified country.", 'error');
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(!credentials.shipping_address || credentials.shipping_address.length <= 0){
            return false;
        }

        setPendingState(-1);

        setTimeout(() => {
            setPendingState(3);

            OrderService.make(credentials)
                .then(response => {
                    cart.dispatch({type: "beginPayment"});

                    OrderService.toCookie(response.data.order);

                    setShippingCost(response.data.shippingCost);

                    setPendingState(4);
                    const script = document.createElement("script");
                    script.src = `https://www.paypal.com/sdk/js?client-id=${response.data.paypalClientId}&currency=${currency.state.iso}`;
                    script.addEventListener("load", () => loadPaypal());
                    document.body.appendChild(script);
                })
                .catch(error => {
                    setPendingState(0);
                    notify.show(error.response.data, 'error');
                });
        }, 1000);
    };

    function loadPaypal() {
        setPendingState(5);

        const sum = parseFloat(coupon.percent_off ? OrderService.getSumOfProductsWithDiscount(products, coupon) + parseFloat(shippingCost) : OrderService.getSumOfProducts(products) + parseFloat(shippingCost)).toFixed(2);

        window.paypal.Buttons({
            createOrder: (data, actions) => OrderService.createPaypalOrder(actions, sum, currency.state.iso),
            onApprove: (data, actions) => {
                OrderService.clearCookie();
                cart.dispatch({type: 'reset'});

                setPendingState(6);

                setTimeout(() => setRedirect(true), 2000);

                cart.dispatch({type: "endPayment"});
            },
            onCancel: () => {
                setTimeout(() => setPendingState(-2), 1000);
                setTimeout(() => setPendingState(0), 2500);

                cart.dispatch({type: "endPayment"});
            },
            onError: err => {
                console.error(err);
            }
        }).render(paypalRef.current);
    }

    return (
        <>
            {redirect && <Redirect to="/"/>}
            <Helmet>
                <title>Shop | Checkout</title>
            </Helmet>
            {(pendingState > -2 && pendingState <= 2) ?
                <div
                    className={`row w-100 my-5 align-items-center justify-content-center ${pendingState < 0 && "animated fadeOutDown fast"}`}
                    style={{zIndex: 1}}>
                    <h1 className="col-12 text-center pb-5 mb-4">
                        <Translate id="checkout-header"/>
                    </h1>
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
                            {pendingState < 2 ?
                                <div className={`${pendingState > 0 && "animated fadeOutDown fast"}`}>
                                    <h4 className="my-4">
                                        <Translate id="checkout-details-header"/>
                                    </h4>
                                    {!auth.user &&
                                        <FormGroup>
                                            <label htmlFor="email">
                                                <Translate id="checkout-details-email"/>
                                            </label>
                                            <InputGroup seamless>
                                                <InputGroupAddon type="prepend">
                                                    <InputGroupText>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <FormInput invalid={invalids.includes("email")}
                                                    type="email"
                                                    id="email"
                                                    onChange={e => setEmail(e.target.value)}
                                                    defaultValue={email}
                                                    disabled={pendingState > 0} />
                                            </InputGroup>
                                        </FormGroup>
                                    }
                                    <FormGroup>
                                        <label htmlFor="name">
                                            <Translate id="checkout-details-name"/>
                                        </label>
                                        <InputGroup seamless>
                                            <InputGroupAddon type="prepend">
                                                <InputGroupText>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <FormInput invalid={invalids.includes("name")}
                                                type="text"
                                                id="name"
                                                onChange={e => setName(e.target.value)}
                                                defaultValue={name}
                                                disabled={pendingState > 0} />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="address">
                                            <Translate id="checkout-details-address"/>
                                        </label>
                                        <AsyncSelect
                                            onChange={e => {setAddress(e.value); setPlaceId(e.id)}}
                                            aria-label="address"
                                            loadOptions={searchForAddress}
                                            defaultValue={{ label: address, value: address }}
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
                                        <label htmlFor="zipCode">
                                            <Translate id="checkout-details-zipCode"/>
                                        </label>
                                        <InputGroup seamless>
                                            <InputGroupAddon type="prepend">
                                                <InputGroupText>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ zIndex: 1 }} />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <FormInput invalid={invalids.includes("zipCode")}
                                                type="text"
                                                id="zipCode"
                                                defaultValue={zipCode}
                                                onChange={e => setZipCode(e.target.value)}
                                                disabled={pendingState > 0} />
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
                                        <Translate id="checkout-details-terms"/>
                                    </FormCheckbox>
                                    <Button block type="button" size="lg" className="mt-4" onClick={() => validateData()}>
                                        <Translate id="checkout-details-button"/>
                                    </Button>
                                </div>
                            :
                                <div className={`${pendingState > 1 && "animated fadeInUp fast"}`}>
                                    <ShippingForm pendingState={pendingState} shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} address={address}/>
                                </div>
                            }

                        </Form>
                    </div>
                </div>
                : (pendingState > 0 && pendingState < 6) ?
                    <PaymentProgress pendingState={pendingState} ref={paypalRef} shippingCost={shippingCost} sum={OrderService.getSumOfProductsWithDiscount(products, coupon)}/>
                :
                    pendingState === -2 ?
                        <FontAwesomeIcon size="6x" icon={faTimesCircle} className="animated bounceIn text-danger"/>
                    :
                        <FontAwesomeIcon size="6x" icon={faCheckCircle} className="animated bounceIn text-success"/>
            }
        </>
    );
}

export default Checkout;
