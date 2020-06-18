import React, {useState} from 'react';
import {Alert, Button, Form, FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText} from "shards-react";
import {isEmail} from '../../utils/helpers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.css';
import {InertiaLink} from "@inertiajs/inertia-react";
import Shop from "../../layouts/Shop";
import AuthService from "../../utils/AuthService";
import {Inertia} from "@inertiajs/inertia";
import GoogleButton from "react-google-button";
import Text from "../../components/Text";

export default function Login({googleClientId}) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    function handleSubmit(e){
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
                    setTimeout(() => {
                        response.data.user.name === "admin" ? Inertia.visit('/admin') : Inertia.visit('/');
                    }, 500);
                })
                .catch(error => {
                    setError(error.response.data);
                    setLoading(false);
                })
        }
    }

    function googleInit(){
        const script = document.createElement("script");
        script.src = `https://apis.google.com/js/platform.js?onload=init`;
        script.addEventListener("load", () => googleLogin());
        document.body.appendChild(script);
    }

    function googleLogin(){
        gapi.load('auth2', async function() {
            const GoogleAuth = await gapi.auth2.init({client_id: googleClientId});
            setLoading(true);

            GoogleAuth.signIn()
                .then(user => {
                    setUser(user);
                    AuthService.loginWithGoogle(user);
                })
                .catch(error => {
                    console.log(error.response);
                    setLoading(false);
                });
        });
    }

    return (
        <Shop>
            <div className="container col-lg-6 col-12">
                <div className="mb-3">
                    <a href="#" className="d-inline-block" onClick={() => googleInit()}>
                        <GoogleButton label={<Text id="login-google"/>} />
                    </a>
                </div>
                <Form onSubmit={handleSubmit}>
                    {error &&
                        <Alert theme="danger">
                            <Text id={error}/>
                        </Alert>
                    }

                    <FormGroup>
                        <label htmlFor="#email">
                            <Text id="login-email"/>
                        </label>
                        <InputGroup seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput invalid={!!error} type="email" id="#email" name="email" onChange={e => setEmail(e.target.value)} disabled={loading} required/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#password">
                            <Text id="login-password"/>
                        </label>
                        <InputGroup seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput invalid={!!error} type="password" id="#password" name="password" onChange={e => setPassword(e.target.value)} disabled={loading} required/>
                        </InputGroup>
                    </FormGroup>
                    <Button block>
                        {loading ? user ?
                            <FontAwesomeIcon size="lg" icon={faCheckCircle} className="animated fadeIn"/>
                            :
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="sr-only">
                                    <Text id="login-loading"/>
                                </span>
                            </div>
                            :
                            <span>
                                <Text id="login-submit"/>
                            </span>
                        }
                    </Button>
                    <p className="mt-3">
                        <InertiaLink href="/register">
                            <Text id="login-register"/>
                        </InertiaLink>
                    </p>
                </Form>
            </div>
        </Shop>
    )
}
