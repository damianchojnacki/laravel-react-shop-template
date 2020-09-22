import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    Alert,
    Button,
    Form,
    FormCheckbox,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
} from "shards-react";
import AuthService from "../../utils/services/AuthService";
import { useAuth } from "../../utils/stores/store";
import classNames from "classnames";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faEnvelope,
    faLock,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { checkFullName, equals, isEmail } from "../../utils/helpers";
import Welcome from "../../components/shop/Register/Welcome";
import Email from "../../components/shop/Register/Email";
import Name from "../../components/shop/Register/Name";
import Password from "../../components/shop/Register/Password";
import Terms from "../../components/shop/Register/Terms";
import Loading from "../../components/Loading";

export default function Register() {
    const auth = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState(null);
    const [step, setStep] = useState(1);
    const [hide, setHide] = useState(false);
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let check = true;

        for (let i = 1; i <= steps.length; i++) {
            if (validateStep(i) === false) check = false;
        }

        return check;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setLoading(true);

            AuthService.register({
                email,
                name,
                password,
                passwordConfirmation,
            })
                .then(() => {
                    AuthService.getUser().then((res) => {
                        auth.dispatch({ type: "login", payload: res.data });
                    });
                })
                .catch((err) => {
                    setErrors(err);
                    setStep(1);
                })
                .finally(() => {
                    setTimeout(() => setLoading(false), 2000);
                });
        } else nextStep();
    };

    const validateStep = (i = step) => {
        switch (i) {
            case 1:
                return true;
            case 2:
                return !!isEmail(email);
            case 3:
                return !!checkFullName(name);
            case 4:
                return !!(
                    equals(password, passwordConfirmation) &&
                    password.length >= 8
                );
            case 6:
                return !!terms;
        }
    };

    const nextStep = () => {
        if (validateStep(step)) {
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

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            step === 5 ? handleSubmit(e) : nextStep();
        }
    };

    const actions = {
        handleKeyDown,
        nextStep,
        previousStep,
        validateStep,
        handleSubmit,
    };

    const steps = [
        <Welcome {...actions} errors={errors} />,
        <Email {...actions} email={email} setEmail={setEmail} />,
        <Name {...actions} name={name} setName={setName} />,
        <Password
            {...actions}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
        />,
        <Terms {...actions} terms={terms} setTerms={setTerms} />,
    ];

    const formClasses = classNames({
        "w-100": true,
        animated: true,
        fadeOut: hide,
        fadeIn: !hide,
    });

    return auth.state.authenticated && !loading ? (
        <Redirect to="/homepage/registration-successful" />
    ) : (
        <>
            <Helmet>
                <title>Shop | Register</title>
            </Helmet>
            <div className="container col-lg-9 col-12 d-flex justify-content-center">
                {loading ? (
                    auth.state.authenticated ? (
                        <FontAwesomeIcon
                            size="6x"
                            icon={faCheckCircle}
                            className="animated bounceIn text-success"
                        />
                    ) : (
                        <Loading />
                    )
                ) : (
                    <Form onSubmit={handleSubmit} className={formClasses}>
                        {displayStep()}
                    </Form>
                )}
            </div>
        </>
    );
}
