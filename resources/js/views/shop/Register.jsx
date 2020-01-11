import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Form, FormInput, FormGroup, Button, Alert} from "shards-react";
import AuthService from '../../utils/AuthService';
import {AuthContext} from "../../utils/AuthContext";
import isEmail from 'validator/lib/isEmail';
import GoogleButton from 'react-google-button';
import equals from "validator/es/lib/equals";

export default function Register() {

    const {state, dispatch} = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [country, setCountry] = useState('');
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const {name, value} = e.target;

        name === 'name' && setName(value);
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
        name === 'password_confirmation' && setPasswordConfirmation(value);
        name === 'country' && setCountry(value);
    };

    const validate = (credentials) => {
        let check = true;

        if (!isEmail(credentials.email)) check = false;
        if (!equals(credentials.password, credentials.passwordConfirmation)) check = false;

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
            setLoading(true);

            AuthService.register(credentials)
                .then(() => {
                    AuthService.getUser().then(res => {
                        setErrors({});
                        dispatch({type: "login", payload: res.data});
                    });
                })
                .catch(error => {
                    setErrors(error.response);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const formStyles = {
        position: "absolute",
        top: 50 + "%",
        left: 50 + "%",
        width: 50 + "%",
        transform: "translate(-50%, -50%)",
    };

    const steps = [
        <>
            <h1 className="text-center mb-4">Rejestracja</h1>
            <Button block onClick={() => setStep(2)}>Zaczynamy!</Button>
        </>,
        <>
            <h1 className="text-center mb-4">Krok 2</h1>
            <Button block>Zaczynamy!</Button>
        </>,
    ];

    const displayStep = () => {
      return steps[step - 1];
    };

    return state.authenticated
        ?
        <Redirect to="/"/>
        :
        (
            <div className="content">
                <Helmet>
                    <title>Shop | Register</title>
                </Helmet>
                <Form method="POST" onSubmit={handleSubmit} style={formStyles}>

                    {displayStep()}

                    {/*
                        <FormGroup>
                            <label htmlFor="#email">Email</label>
                            <FormInput invalid={!!errors.data} type="email" id="#email" name="email" onChange={handleChange} disabled={loading} required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#password">Password</label>
                            <FormInput invalid={!!errors.data} type="password" id="#password" name="password" onChange={handleChange} disabled={loading} required/>
                        </FormGroup>
                        <Button>Log in</Button>
                        */}
                </Form>
            </div>
        )
}
