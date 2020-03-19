import React, {useState, useRef} from "react";
import {
    Form, FormGroup, InputGroup, InputGroupAddon, FormInput, Button, InputGroupText, FormCheckbox, Progress
} from "shards-react";
import {Helmet} from "react-helmet";
import ProductsList from "../../components/shop/ProductsList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import AsyncSelect from 'react-select/async';
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {
    getSumOfProducts,
    getSumOfProductsWithDiscount,
    shippingDataValidate
} from "../../utils/helpers";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import Shop from "../../layouts/Shop";
import GoogleService from "../../utils/GoogleService";
import {notify} from "react-notify-toast/bin/notify";
import OrderService from "../../utils/OrderService";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import PaymentProgress from "../../components/shop/PaymentProgress";
import 'animate.css';
import Coupon from "../../components/shop/Coupon";

function Checkout({paypalClientID, order, coupon}) {
    const {cart, auth, currency} = usePage();

    const [name, setName] = useState(order.name);
    const [email, setEmail] = useState(order.email);
    const [address, setAddress] = useState(order.address);
    const [zipCode, setZipCode] = useState(order.zip_code);
    const [terms, setTerms] = useState(false);
    const [invalids, setInvalids] = useState([]);
    const [pendingState, setPendingState] = useState(0);

    const paypalRef = useRef();

    function searchForAddress(input, callback) {
        GoogleService.addressSearch(input, callback);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email: (auth.user && auth.user.email) ?? email,
            name,
            address,
            zip_code: zipCode,
            terms,
        };

        const validation = shippingDataValidate(credentials);

        setInvalids(validation.invalids);

        if (validation.passed && pendingState <= 0) {
            setPendingState(-1);
            setTimeout(() => setPendingState(1), 1000);

            OrderService.make(credentials)
                .then(() => setTimeout(() => {
                    setPendingState(2);
                    const script = document.createElement("script");
                    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientID}&currency=${currency.iso}`;
                    script.addEventListener("load", () => loadPaypal());
                    document.body.appendChild(script);
                }, 1000))
                .catch(error => {
                    setPendingState(0);
                    notify.show(error.response.data)
                });
        }
    };

    function loadPaypal() {
        setPendingState(3);

        const sum = coupon ? getSumOfProductsWithDiscount(cart, coupon) : getSumOfProducts(cart);

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
                            currency_code: currency.iso,
                            value: sum,
                            breakdown: {
                                item_total: {
                                    currency_code: currency.iso,
                                    value: sum,
                                },
                            }
                        },

                    }]
                })
            },
            onApprove: (data, actions) => {
                setPendingState(4);

                setTimeout(() => OrderService.clear(), 1500);
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
        <Shop>
            {(pendingState > -2 && pendingState < 1) ?
                <div
                    className={`row w-100 my-5 align-items-center justify-content-center ${pendingState < 0 && "animated fadeOutDown fast"}`}
                    style={{zIndex: 1}}>
                    <h1 className="col-12 text-center pb-5 mb-4">Checkout</h1>
                    <div className="col-lg-9 col-12">
                        <ProductsList
                            data={cart}
                            sum={getSumOfProducts(cart)}
                            sumWithDiscount={coupon && getSumOfProductsWithDiscount(cart, coupon)}
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
        </Shop>
    );
}

export default Checkout;
