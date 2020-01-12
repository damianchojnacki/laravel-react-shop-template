import React, {useEffect, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Form, FormInput, FormGroup, Button, Alert, InputGroupAddon, InputGroupText, InputGroup, Row, FormCheckbox} from "shards-react";
import AuthService from '../../utils/AuthService';
import {AuthContext} from "../../utils/AuthContext";
import GoogleButton from 'react-google-button';
import classNames from 'classnames';
import 'animate.css';
import 'flag-icon-css/css/flag-icon.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faUnlockAlt, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import {isIn, isEmail, equals} from "validator";
import {checkFullName} from "../../utils/helpers";
import Select from 'react-select';
import {faFileAlt, faFileImage, faFileVideo} from "@fortawesome/free-regular-svg-icons";

export default function Register() {

    const {state, dispatch} = React.useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [country, setCountry] = useState(1);
    const [errors, setErrors] = useState(null);
    const [step, setStep] = useState(1);
    const [hide, setHide] = useState(false);
    const [countries, setCountries] = useState([]);
    const [terms, setTerms] = useState(false);

    useEffect(() => {
        (async function() {
            const countries = await window.axios.get('/api/countries');

            const list =  countries.data.map((country) => {
                return {
                    id: country.id,
                    value: country.name,
                    label:
                        <>
                            <i className={`flag-icon flag-icon-${country.iso.toLowerCase()} align-middle`}></i>
                            <span className="ml-2 pl-2 align-middle font-weight-normal border-left">{country.name}</span>
                        </>
                }
            });

            setCountries(list);
        })();
    }, []);

    const validate = (credentials) => {
        let check = true;

        if (!checkFullName(credentials.name)) check = false;
        if (!isEmail(credentials.email)) check = false;
        if (!equals(credentials.password, credentials.passwordConfirmation)) check = false;
        if (!country || country <= 0) check = false;
        if (!terms) check = false;

        return check;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email,
            name,
            password,
            passwordConfirmation,
            country,
        };

        if (validate(credentials)) {
            AuthService.register(credentials)
                .then(() => {
                    AuthService.getUser().then(res => {
                        dispatch({type: "login", payload: res.data});
                    });
                })
                .catch(error => {
                    setErrors(error.response.data.errors);

                    setStep(1);
                });
        } else nextStep();
    };

    const formStyles = {
        position: "absolute",
        top: 50 + "%",
        left: 50 + "%",
        width: 50 + "%",
        transform: "translate(-50%, -50%)",
    };

    const validateStep = () => {
        switch (step) {
            case 1:
                return true;
            case 2:
                return !!isEmail(email);
            case 3:
                return !!checkFullName(name);
            case 4:
                return !!(equals(password, passwordConfirmation) && password.length >= 8);
            case 5:
                return country && country > 0;
            case 6:
                return !!terms;
        }
    };

    const nextStep = () => {
        if (validateStep()) {
            setHide(true);

            setTimeout(() => {
                setHide(false);

                setStep(step + 1);
            }, 1000);
        }
    };

    const previousStep = () => {
        setHide(true);

        setTimeout(() => {
            setHide(false);

            setStep(step - 1);
        }, 1000);
    };

    const displayStep = () => {
        return steps[step - 1];
    };

    const steps = [
        <>
            <h1 className="mb-4">Sign up</h1>
            {errors &&
                errors.map((e, index) => <Alert theme="danger" key={index}>{e}</Alert>)
            }
            <Button block onClick={nextStep} size="lg">Let's go!</Button>
        </>,
        <>
            <h1>Please enter your e-mail below:</h1>
            <InputGroup seamless className="my-4">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput size="lg" invalid={!!email && !validateStep()} type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} style={{paddingLeft: 50+"px"}} required/>
            </InputGroup>
            <Button block size="lg" onClick={nextStep}>Done</Button>
        </>,
        <>
            <h1>What's your full name?</h1>
            <InputGroup seamless className="my-4">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faUser} size="lg"/>
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput size="lg" invalid={!!name && !validateStep()} type="text" onChange={(e) => {setName(e.target.value)}} value={name} style={{paddingLeft: 50+"px"}} required/>
            </InputGroup>
            <Button size="lg" onClick={previousStep}>Go back</Button>
            <Button size="lg" onClick={nextStep} className="float-right">Next</Button>
        </>,
        <>
            <h1>Select safe password and retype:</h1>
            <Row className="my-4">
                <div className="col-6">
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} size="lg"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput size="lg" invalid={!!password && !validateStep()} type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} style={{paddingLeft: 50+"px"}} required/>
                    </InputGroup>
                </div>
                <div className="col-6">
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} size="lg"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput size="lg" invalid={!!passwordConfirmation && !validateStep()} type="password" onChange={(e) => {setPasswordConfirmation(e.target.value)}} value={passwordConfirmation} style={{paddingLeft: 50+"px"}} required/>
                    </InputGroup>
                </div>
            </Row>
            <Button size="lg" onClick={previousStep}>Go back</Button>
            <Button size="lg" onClick={nextStep} className="float-right">Next</Button>
        </>,
        <>
            <h1>Where are you from?</h1>
            <Row className="my-4">
                <div className="col-12">
                    <Select
                        options={countries}
                        onChange={(e) => {setCountry(e.id)}}
                        styles={{
                            option: (provided) => ({
                                ...provided,
                                padding: 10,
                                fontSize: 20,
                            }),
                            menu: (provided) => ({
                                ...provided,
                                padding: 10,
                            }),
                            valueContainer: (provided) => ({
                                ...provided,
                                padding: 10,
                                fontSize: 20,
                            }),
                        }}
                    />
                </div>
            </Row>
            <Button size="lg" onClick={previousStep}>Go back</Button>
            <Button size="lg" onClick={nextStep} className="float-right">Last step</Button>
        </>,
        <>
            <h1>We are almost done!</h1>
            <p>Please read and acceppt the terms and conditions:</p>
            <FormCheckbox
                onChange={() => {setTerms(!terms)}}
                checked={terms}
                className="my-4"
            >
                The terms and conditions of usage The Shop.
            </FormCheckbox>
            <Button size="lg" onClick={previousStep}>Go back</Button>
            <Button size="lg" onClick={handleSubmit} className="float-right">Sign in!</Button>
        </>
    ];

    const formClasses = classNames({
        animated: true,
        fadeOut: hide,
        fadeIn: !hide,
    });

    return state.authenticated
        ?
        <Redirect to="/"/>
        :
        (
            <div className="content">
                <Helmet>
                    <title>Shop | Register</title>
                </Helmet>
                <Form method="POST" onSubmit={handleSubmit} className={formClasses} style={formStyles}>
                    {displayStep()}
                </Form>
            </div>
        )
}
