import { faUser } from "@fortawesome/free-solid-svg-icons";
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

export default function Name({
    handleKeyDown,
    nextStep,
    previousStep,
    validateStep,
    name,
    setName,
}) {
    return (
        <Step handleKeyDown={handleKeyDown}>
            <h2 className="h1">
                <Translate id="register-name" />
            </h2>
            <InputGroup seamless className="my-4">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput
                    size="lg"
                    invalid={!!name && !validateStep()}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                    style={{ paddingLeft: 50 + "px" }}
                    required
                    autoFocus
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
