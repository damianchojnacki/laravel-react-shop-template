import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    Button,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "shards-react";
import Translate from "../../Translate";
import RippledButton from "../RippledButton";
import Step from "./Step";

export default function Email({
    handleKeyDown,
    nextStep,
    previousStep,
    validateStep,
    email,
    setEmail,
}) {
    return (
        <Step handleKeyDown={handleKeyDown}>
            <h2 className="h1">
                <Translate id="register-email" />
            </h2>
            <InputGroup seamless className="my-4">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput
                    size="lg"
                    invalid={!!email && !validateStep()}
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    style={{ paddingLeft: 50 + "px" }}
                    required
                    autoFocus
                    autoComplete="false"
                />
            </InputGroup>
            <RippledButton size="lg" onClick={previousStep}>
                <Translate id="register-back" />
            </RippledButton>
            <RippledButton size="lg" onClick={nextStep} className="float-right">
                <Translate id="register-next" />
            </RippledButton>
        </Step>
    );
}
