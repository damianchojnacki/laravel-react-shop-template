import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Form, FormInput, FormGroup, Button, Alert, InputGroup, InputGroupAddon, InputGroupText} from "shards-react";
import AuthService from '../../utils/AuthService';
import {AuthContext} from "../../utils/AuthContext";
import {isEmail} from '../../utils/helpers';
import GoogleButton from 'react-google-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.css';

export default function Login() {
    const {state, dispatch} = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

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
                    setTimeout(() => setErrors(error.response), 1000);
                })
                .finally(() => {
                    setTimeout(() => setLoading(false), 1000);
                });
        }
    };

    function googleLogin(googleClientId){
        gapi.load('auth2', async function() {
            const GoogleAuth = await gapi.auth2.init({client_id: googleClientId});
            setLoading(true);

            GoogleAuth.signIn()
                .then(user => {
                    AuthService.loginWithGoogle(user);
                })
                .catch(error => {
                    console.log(error.response);
                    setLoading(false);
                });
        });
    }

    return state.authenticated && !loading
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
                            <a href="#" className="d-inline-block" onClick={() => AuthService.googleInit(googleLogin)}>
                                <GoogleButton label="Sign in with Google" />
                            </a>                        </div>
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
                                    <FormInput invalid={!!errors.data} type="email" id="#email" name="email" onChange={e => setEmail(e.target.value)} disabled={loading} required/>
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
                                    <FormInput invalid={!!errors.data} type="password" id="#password" name="password" onChange={e => setPassword(e.target.value)} disabled={loading} required/>
                                </InputGroup>
                            </FormGroup>
                            <Button block>
                                {loading ? state.authenticated ?
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
                                <Link to="./register">Don't have an account? You can create one there.</Link>
                            </p>
                        </Form>
                    </div>
                </>
            )
}
