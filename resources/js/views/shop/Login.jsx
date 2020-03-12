import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Form, FormInput, FormGroup, Button, Alert, InputGroup, InputGroupAddon, InputGroupText} from "shards-react";
import {isEmail} from '../../utils/helpers';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.css';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Shop from "../../layouts/Shop";
import AuthService from "../../utils/AuthService";
import {Inertia} from "@inertiajs/inertia";

export default function Login({googleClientId, googleRedirectUrl}) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        if(isEmail(email) && password){
            setLoading(true);

            AuthService.login(credentials)
                .then(response => {
                    setUser(response.data.user);
                    setTimeout(() => Inertia.visit('/'), 500);
                })
                .catch(error => {
                    setErrors(error.response.data);
                    setLoading(false);
                })
        }
    };

    return (
        <Shop>
            <Helmet>
                <title>Shop | Login</title>
            </Helmet>
            <div className="container col-lg-6 col-12">
                <div className="mb-3">
                    <GoogleLogin
                        clientId={googleClientId}
                        onSuccess={googleRedirectUrl}
                        onFailure={googleRedirectUrl}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <Form onSubmit={handleSubmit}>
                    {errors &&
                        <Alert theme="danger">
                            {errors}
                        </Alert>
                    }
                    <FormGroup>
                        <label htmlFor="#email">Email</label>
                        <InputGroup seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput invalid={!!errors} type="email" id="#email" name="email" onChange={e => setEmail(e.target.value)} disabled={loading} required/>
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
                            <FormInput invalid={!!errors} type="password" id="#password" name="password" onChange={e => setPassword(e.target.value)} disabled={loading} required/>
                        </InputGroup>
                    </FormGroup>
                    <Button block>
                        {loading ? user ?
                            <FontAwesomeIcon size="lg" icon={faCheckCircle} className="animated fadeIn"/>
                            :
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            :
                            <span>Log in</span>
                        }
                    </Button>
                    <p className="mt-3">
                        <InertiaLink href="/register">Don't have an account? You can create one there.</InertiaLink>
                    </p>
                </Form>
            </div>
        </Shop>
    )
}
