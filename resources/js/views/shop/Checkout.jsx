import React, {useEffect, useState, useRef} from "react";
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
import {checkFullName, isEmail} from "../../utils/helpers";
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import Shop from "../../layouts/Shop";
import GoogleService from "../../utils/GoogleService";
import {notify} from "react-notify-toast/bin/notify";
import OrderService from "../../utils/OrderService";
import CartService from "../../utils/CartService";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import 'animate.css';

function Checkout({paypalClientID}) {
    const {cart, auth, currency} = usePage();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [terms, setTerms] = useState(false);
    const [invalids, setInvalids] = useState([]);
    const [pendingState, setPendingState] = useState(0);

    const paypalRef = useRef();

    function searchForAddress(input, callback) {
        GoogleService.addressSearch(input, callback);
    }

    const getSumOfProducts = () => {
        if (cart.length) {
            let sum = 0;

            cart.map(product => {
                sum += parseFloat(product.price_final) * product.quantity;
            });

            return sum.toFixed(2);
        }
    };

    const validate = (credentials) => {
        let check = true;

        const invalids = [];

        if (!checkFullName(credentials.name)) {
            invalids.push("name");
            check = false;
        }
        if (!isEmail(credentials.email)) {
            invalids.push("email");
            check = false;
        }
        if (!address || address.length <= 0) {
            invalids.push("address");
            check = false;
        }
        if (!zipCode || zipCode.length <= 0) {
            invalids.push("zipcode");
            check = false;
        }
        if (!terms) {
            invalids.push("terms");
            check = false;
        }

        setInvalids(invalids);

        return check;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email,
            name,
            address,
            zip_code: zipCode,
        };

        if (validate(credentials) && pendingState <= 0) {
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

    function getProgressText() {
        switch (pendingState) {
            case 1:
                return "Creating the order...";
            case 2:
                return "Loading the payment options...";
            case 3:
                return "Processing the payment...";
            default:
                return "Finishing...";
        }
    }

    function loadPaypal() {
        setPendingState(3);
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    application_context: {
                        user_action: "PAY_NOW"
                    }
                    purchase_units: [{
                        description: "Shop-template order",
                        amount: {
                            currency_code: currency.iso,
                            value: getSumOfProducts(),
                            breakdown: {
                                item_total: {
                                    currency_code: currency.iso,
                                    value: getSumOfProducts()
                                },
                            }
                        },
                        items: cart.map(product => {
                            return {
                                name: product.name,
                                quantity: product.quantity,
                                unit_amount: {
                                    currency_code: currency.iso,
                                    value: product.price_final
                                },
                            }
                        })
                    }]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();

                setPendingState(4);

                setTimeout(() => {
                    setPendingState(5);
                }, 500);

                setTimeout(() => {
                    CartService.clear().then(() => Inertia.visit('/'));
                }, 1000);

                console.log(order);
            },
            onError: err => {
                console.error(err);
            }
        })
            .render(paypalRef.current);
    }

    return (
        <Shop>
            <Helmet>
                <title>Shop | Checkout</title>
            </Helmet>
            <>
                {pendingState <= 0 ?
                    <div
                        className={`row w-100 my-5 align-items-center justify-content-center ${pendingState < 0 && "animated fadeOutDown fast"}`}
                        style={{zIndex: 1}}>
                        <h1 className="col-12 text-center pb-5 mb-4">Checkout</h1>
                        <div className="col-lg-9 col-12">
                            <ProductsList
                                data={cart}
                                sum={getSumOfProducts()}
                            />
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
                                        <FormInput invalid={invalids.includes("email")} type="email" id="email"
                                                   onChange={e => setEmail(e.target.value)}
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
                                        <FormInput invalid={invalids.includes("name")} type="text" id="name"
                                                   onChange={e => setName(e.target.value)} disabled={pendingState > 0}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="country">Address</label>
                                    <AsyncSelect
                                        onChange={e => setAddress(e.id)}
                                        inputProps={{id: 'address'}}
                                        loadOptions={searchForAddress}
                                        disabled={pendingState > 0}
                                        styles={{
                                            menu: (provided) => ({
                                                ...provided,
                                                zIndex: 10,
                                                textAlign: "justify"
                                            }),
                                            container: (provided) => ({
                                                ...provided,
                                                border: invalids.includes("address") ? "1px solid red" : null,
                                                borderRadius: ".375rem",
                                            }),
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
                                        <FormInput invalid={invalids.includes("zipCode")} type="text" id="zipCode"
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
                    : pendingState < 5 ?
                        <div className="animated fadeInDown fast w-50 text-center" style={{zIndex: 1}}>
                            <Progress value={pendingState} max={4} className="my-4"/>
                            {getProgressText()}
                            <div ref={paypalRef} className="mt-4"/>
                        </div>
                    :
                        <FontAwesomeIcon size="6x" icon={faCheckCircle} className="animated bounceIn text-success"/>
                }
            </>
        </Shop>
    );
}

export default Checkout;
