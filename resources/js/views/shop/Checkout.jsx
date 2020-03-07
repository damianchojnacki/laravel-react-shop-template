import React, {useEffect, useState} from "react";
import {
    Form, FormGroup, InputGroup, InputGroupAddon, FormInput, Button, InputGroupText, FormCheckbox
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
import 'flag-icon-css/css/flag-icon.min.css';
import Shop from "../../layouts/Shop";

function Checkout() {
    const {cart, auth} = usePage();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [terms, setTerms] = useState(false);
    const [invalids, setInvalids] = useState([]);

    function searchAPI(input, callback){
        input && window.axios.get(`/api/google-places/${input}`)
            .then(response => {
                const list = response.data.predictions.map((address) => {
                    return {
                        id: address.id,
                        value: address.description,
                        label: address.description
                    }
                });

                callback(list);
            })
            .catch(error => console.log(error.response.data));
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

        if (!checkFullName(credentials.name)){
            invalids.push("name");
            check = false;
        }
        if (!isEmail(credentials.email)){
            invalids.push("email");
            check = false;
        }
        if (!address || address.length <= 0){
            invalids.push("address");
            check = false;
        }
        if (!zipCode || zipCode.length <= 0){
            invalids.push("zipcode");
            check = false;
        }
        if (!terms){
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

        if (validate(credentials)) {
            console.log("validation successful");
        } else console.log("validation failure");
    };

    return (
        <Shop>
            <Helmet>
                <title>Shop | Checkout</title>
            </Helmet>
            <div className="row w-100 my-5 align-items-center justify-content-center">
                <h1 className="col-12 text-center pb-5 mb-5">Checkout</h1>
                <div className="col-lg-9 col-12">
                    <ProductsList
                        data={cart}
                        sum={getSumOfProducts()}
                    />
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <Form onSubmit={handleSubmit}>
                        <h4>Please fill all the shipment data:</h4>
                        {!auth.user &&
                            <FormGroup>
                                <label htmlFor="email">Email</label>
                                <InputGroup seamless>
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput invalid={invalids.includes("email")} type="email" id="email" onChange={e => setEmail(e.target.value)} />
                                </InputGroup>
                            </FormGroup>
                        }
                        <FormGroup>
                            <label htmlFor="name">Full name</label>
                            <InputGroup seamless>
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput invalid={invalids.includes("name")} type="text" id="name" onChange={e => setName(e.target.value)} />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="country">Address</label>
                            <AsyncSelect
                                onChange={e => setAddress(e.id)}
                                inputProps={{ id: 'address' }}
                                loadOptions={searchAPI}
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
                            <label htmlFor="zipcode">ZIP Code</label>
                            <InputGroup seamless>
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{zIndex: 2}}/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput invalid={invalids.includes("zipcode")} type="text" id="zipcode" onChange={e => setZipCode(e.target.value)} />
                            </InputGroup>
                        </FormGroup>
                        <FormCheckbox
                            onChange={() => {setTerms(!terms)}}
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
        </Shop>
    );
}

export default Checkout;
