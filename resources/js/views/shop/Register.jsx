import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Form, FormInput, Button, Alert, InputGroupAddon, InputGroupText, InputGroup, Row, FormCheckbox} from "shards-react";
import AuthService from '../../utils/AuthService';
import {useAuth} from "../../utils/AuthContext";
import classNames from 'classnames';
import 'animate.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {checkFullName, isEmail, equals} from "../../utils/helpers";
import Text from "../../components/Text";

export default function Register() {

    const auth = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState(null);
    const [step, setStep] = useState(1);
    const [hide, setHide] = useState(false);
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = (credentials) => {
        let check = true;

        if (!checkFullName(credentials.name)) check = false;
        if (!isEmail(credentials.email)) check = false;
        if (!equals(credentials.password, credentials.passwordConfirmation)) check = false;
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
        };

        if (validate(credentials)) {
            setLoading(true);

            AuthService.register(credentials)
                .then(() => {
                    AuthService.getUser().then(res => {
                        dispatch({type: "login", payload: res.data});
                    });
                })
                .catch(error => {
                    setErrors(error.response.data.errors);
                    setStep(1);
                })
                .finally(() => {
                    setTimeout(() => setLoading(false), 2000);
                });
        } else nextStep();
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

    const handleKeyDown = e => {
        if (e.key === 'Enter'){
            step === 5 ? handleSubmit(e) : nextStep();
        }
    };

    const steps = [
        <div onKeyDown={handleKeyDown}>
            <h1 className="mb-4">
                <Text id="register-welcome"/>
            </h1>
            {errors &&
            errors.map((e, index) => <Alert theme="danger" key={index}>{e}</Alert>)
            }
            <Button block onClick={nextStep} size="lg">
                <Text id="register-start"/>
            </Button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h1">
                <Text id="register-email"/>
            </h2>
            <InputGroup seamless className="my-4">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput size="lg" invalid={!!email && !validateStep()} type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} style={{paddingLeft: 50+"px"}} required autoFocus/>
            </InputGroup>
            <Button block size="lg" onClick={nextStep}>
                <Text id="register-done"/>
            </Button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h1">
                <Text id="register-name"/>
            </h2>
            <InputGroup seamless className="my-4">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faUser} size="lg"/>
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput size="lg" invalid={!!name && !validateStep()} type="text" onChange={(e) => {setName(e.target.value)}} value={name} style={{paddingLeft: 50+"px"}} required autoFocus/>
            </InputGroup>
            <Button size="lg" onClick={previousStep}>
                <Text id="register-back"/>
            </Button>
            <Button size="lg" onClick={nextStep} className="float-right">
                <Text id="register-next"/>
            </Button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h2">
                <Text id="register-password"/>
            </h2>
            <Row className="my-4">
                <div className="col-lg-6 col-12 my-2">
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} size="lg"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput size="lg" invalid={!!password && !validateStep()} type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} style={{paddingLeft: 50+"px"}} required autoFocus/>
                    </InputGroup>
                </div>
                <div className="col-lg-6 col-12 my-2">
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
            <Button size="lg" onClick={previousStep}>
                <Text id="register-back"/>
            </Button>
            <Button size="lg" onClick={nextStep} className="float-right">
                <Text id="register-next"/>
            </Button>
        </div>,
        <div onKeyDown={handleKeyDown}>
            <h2 className="h1">
                <Text id="register-terms-title"/>
            </h2>
            <p>
                <Text id="register-terms-subtitle"/>
            </p>
            <FormCheckbox
                onChange={() => {setTerms(!terms)}}
                checked={terms}
                className="my-4"
            >
                <Text id="register-terms-label"/>
            </FormCheckbox>
            <Button size="lg" onClick={previousStep}>
                <Text id="register-back"/>
            </Button>
            <Button size="lg" onClick={handleSubmit} className="float-right">
                <Text id="register-submit"/>
            </Button>
        </div>
    ];

    const formClasses = classNames({
        "animated": true,
        "fadeOut": hide,
        "fadeIn": !hide,
    });

    return auth.state.authenticated && !loading
        ?
        <Redirect to="/register/success"/>
        :
        (
            <>
                <Helmet>
                    <title>Shop | Register</title>
                </Helmet>
                <div className="container col-lg-9 col-12">
                    {loading ? auth.state.authenticated ?
                        <div className="d-flex justify-content-center">
                            <FontAwesomeIcon size="6x" icon={faCheckCircle} className="animated bounceIn text-success"/>
                        </div>
                    :
                        <div className="d-flex justify-content-center">
                            <div className="spinner-grow" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :
                        <Form onSubmit={handleSubmit} className={formClasses}>
                            {displayStep()}
                        </Form>
                    }

                </div>
            </>
        )
}
