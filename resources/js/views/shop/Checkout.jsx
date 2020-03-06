import React, {useEffect, useState} from "react";
import {
    Form, FormGroup, InputGroup, InputGroupAddon, FormInput, Button, InputGroupText, FormCheckbox
} from "shards-react";
import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import {Helmet} from "react-helmet";
import ProductsList from "../../components/shop/ProductsList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import Select from "react-select";
import {faStreetView} from "@fortawesome/free-solid-svg-icons/faStreetView";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {checkFullName, equals, isEmail} from "../../utils/helpers";
import {usePage} from "@inertiajs/inertia-react";

function Checkout(props) {
    const {cart} = usePage();

    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [terms, setTerms] = useState(false);
    const [countries, setCountries] = useState([]);
    const [invalids, setInvalids] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const list = props.countries.map((country) => {
            return {
                id: country.id,
                value: country.name,
                label:
                    <>
                        <i className={`flag-icon flag-icon-${country.iso.toLowerCase()} align-middle`}/>
                        <span className="ml-2 pl-2 align-middle font-weight-normal border-left">{country.name}</span>
                    </>
            }
        });

        setCountries(list);
    }, []);

    const changeQuantity = (product, action) => {
        action ? cart.dispatch({type: "add", payload: product.id}) : cart.dispatch({type: "remove", payload: product.id});

        notify.show(`Cart has been updated!.`, 'success', 1500);
    };

    const getSumOfProducts = () => {
        if (products.length) {
            let sum = 0;

            products.map(product => {
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
        if (!country || country <= 0){
            invalids.push("country");
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
            zipCode,
            country,
        };

        if (validate(credentials)) {
            console.log("validation successful");
        } else console.log("validation failure");
    };

    return (
        <>
            {redirect && <Redirect to="/"/>}
            <Helmet>
                <title>Shop | Checkout</title>
            </Helmet>
            <div className="row w-100 my-5 align-items-center justify-content-center">
                <h1 className="col-12 text-center pb-5 mb-5">Checkout</h1>
                <div className="col-lg-9 col-12">
                    <ProductsList
                        data={products}
                        fields={{
                            name: true,
                            price: true,
                        }}
                        changeQuantity={changeQuantity}
                        sum={getSumOfProducts()}
                    />
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <Form onSubmit={handleSubmit}>
                        {!auth.state.authenticated &&
                            <>
                                <h4>Please fill all the needed data:</h4>
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
                                    <label htmlFor="country">Country</label>
                                    <Select
                                        options={countries}
                                        onChange={(e) => {setCountry(e.id)}}
                                        inputProps={{ id: 'country' }}
                                        styles={{
                                            menu: (provided) => ({
                                                ...provided,
                                                zIndex: 10,
                                                textAlign: "justify"
                                            }),
                                            container: (provided) => ({
                                                ...provided,
                                                border: invalids.includes("country") ? "1px solid red" : null,
                                                borderRadius: ".375rem",
                                            }),
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="address">Address</label>
                                    <InputGroup seamless>
                                        <InputGroupAddon type="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={faStreetView} style={{zIndex: 2}}/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <FormInput invalid={invalids.includes("address")} type="text" id="address" onChange={e => setAddress(e.target.value)} />
                                    </InputGroup>
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
                            </>
                        }
                        <Button block size="lg" color="success" className="mt-4">Proceed to payment</Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Checkout;
