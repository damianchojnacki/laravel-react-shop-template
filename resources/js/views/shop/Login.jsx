import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    Alert,
    Button,
    Form,
    FormGroup,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "shards-react";
import AuthService from "../../utils/services/AuthService";
import { useAuth } from "../../utils/stores/store";
import { isEmail } from "../../utils/helpers";
import GoogleButton from "react-google-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faEnvelope,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.css";
import Translate from "../../components/Translate";
import LanguageService from "../../utils/services/LanguageService";

export default function Login() {
    const auth = useAuth();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        if (isEmail(email) && password) {
            setLoading(true);

            AuthService.login(credentials)
                .then(() => {
                    AuthService.getUser().then((res) => {
                        setErrors(null);
                        auth.dispatch({ type: "login", payload: res.data });
                    });
                })
                .catch((err) => {
                    setTimeout(() => setErrors(err), 1000);
                })
                .finally(() => {
                    setTimeout(() => setLoading(false), 1000);
                });
        }
    };

    function googleLogin(googleClientId) {
        gapi.load("auth2", async function() {
            const GoogleAuth = await gapi.auth2.init({
                client_id: googleClientId,
            });
            setLoading(true);

            GoogleAuth.signIn()
                .then((user) => {
                    AuthService.loginWithGoogle(user).then(() => {
                        AuthService.getUser().then((res) => {
                            setErrors({});
                            auth.dispatch({ type: "login", payload: res.data });
                            setTimeout(() => setLoading(false), 1000);
                        });
                    });
                })
                .catch((error) => {
                    console.warn(error.response);
                    setLoading(false);
                });
        });
    }

    return auth.state.authenticated && !loading ? (
        <Redirect to="/" />
    ) : (
        <>
            <Helmet>
                <title>Shop | Login</title>
            </Helmet>
            <div className="container col-lg-6 col-12">
                <div className="mb-3">
                    <a
                        href="#"
                        className="d-inline-block"
                        onClick={() => AuthService.googleInit(googleLogin)}
                    >
                        <GoogleButton
                            label={LanguageService.translate("login-google")}
                        />
                    </a>
                </div>
                <Form method="POST" onSubmit={handleSubmit}>
                    {errors && (
                        <Alert theme="danger">
                            <Translate id={errors} />
                        </Alert>
                    )}
                    <FormGroup>
                        <label htmlFor="#email">
                            <Translate id="login-email" />
                        </label>
                        <InputGroup seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput
                                invalid={!!errors}
                                type="email"
                                id="#email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="#password">
                            <Translate id="login-password" />
                        </label>
                        <InputGroup seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput
                                invalid={!!errors}
                                type="password"
                                id="#password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </InputGroup>
                    </FormGroup>
                    <Button block>
                        {loading ? (
                            auth.state.authenticated ? (
                                <FontAwesomeIcon
                                    size="lg"
                                    icon={faCheckCircle}
                                    className="animated fadeIn"
                                />
                            ) : (
                                <div
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                >
                                    <span className="sr-only">
                                        <Translate id="login-loading" />
                                    </span>
                                </div>
                            )
                        ) : (
                            <span>
                                <Translate id="login-submit" />
                            </span>
                        )}
                    </Button>
                    <p className="mt-3">
                        <Link to="./register">
                            <Translate id="login-register" />
                        </Link>
                    </p>
                </Form>
            </div>
        </>
    );
}
