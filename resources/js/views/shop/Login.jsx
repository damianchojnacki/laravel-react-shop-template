import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Form, FormInput, FormGroup, Button, Alert, InputGroup, InputGroupAddon, InputGroupText} from "shards-react";
import AuthService from '../../utils/AuthService';
import {AuthContext} from "../../utils/AuthContext";
import isEmail from 'validator/lib/isEmail';
import GoogleButton from 'react-google-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login() {

    const {state, dispatch} = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;

        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        if(isEmail(email) && password){
            setLoading(true);

            AuthService.login(credentials)
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

    return state.authenticated
            ?
            <Redirect to="/"/>
            :
            (
                <>
                    <Helmet>
                        <title>Shop | Login</title>
                    </Helmet>
                    <div className="container col-lg-6 col-12">
                        <div className="mb-3">
                            <a href="./redirect/google" className="d-inline-block"><GoogleButton /></a>
                        </div>
                        <Form method="POST" onSubmit={handleSubmit}>
                            {errors.data
                            && (
                                <Alert theme="danger">
                                    {errors.data}
                                </Alert>
                            )}
                            <FormGroup>
                                <label htmlFor="#email">Email</label>
                                <InputGroup seamless>
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput invalid={!!errors.data} type="email" id="#email" name="email" onChange={handleChange} disabled={loading} required/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">Password</label>
                                <InputGroup seamless>
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faLock} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput invalid={!!errors.data} type="password" id="#password" name="password" onChange={handleChange} disabled={loading} required/>
                                </InputGroup>
                            </FormGroup>
                            <Button>Log in</Button>
                            <p className="mt-3">
                                <Link to="./register">Don't have an account? You can create one there.</Link>
                            </p>
                        </Form>
                    </div>
                </>
            )
}
