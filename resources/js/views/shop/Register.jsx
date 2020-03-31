import React, {useState} from 'react';
import {
    Alert,
    Button,
    Form,
    FormCheckbox,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "shards-react";
import AuthService from '../../utils/AuthService';
import classNames from 'classnames';
import 'animate.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {checkFullName, equals, isEmail} from "../../utils/helpers";
import {Inertia} from "@inertiajs/inertia";
import Shop from "../../layouts/Shop";
import Text from "../../components/Text";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState(null);
    const [step, setStep] = useState(1);
    const [hide, setHide] = useState(false);
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

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
                .then(response => {
                    setUser(response.data.user);
                    setTimeout(() => Inertia.visit('/'), 500);
                })
                .catch(error => {
                    setErrors(error.response.data.errors);
                    setStep(1);
                    setLoading(false)
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

    return (
        <Shop>
            <div className="container col-lg-9 col-12">
                {loading ? user ?
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon size="6x" icon={faCheckCircle} className="animated bounceIn text-success"/>
                    </div>
                :
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">
                                <Text id="register-loading"/>
                            </span>
                        </div>
                    </div>
                :
                    <Form onSubmit={handleSubmit} className={formClasses}>
                        {displayStep()}
                    </Form>
                }
            </div>
        </Shop>
    )
}
