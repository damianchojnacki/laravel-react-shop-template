import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {
    Row,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "shards-react";
import Translate from "../../Translate";
import RippledButton from "../RippledButton";
import Step from "./Step";
import Tooltip from "../Tooltip/index";

export default function Password({
    handleKeyDown,
    nextStep,
    previousStep,
    validateStep,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
}) {
    const [visible, setVisible] = useState(false);

    return (
        <Step handleKeyDown={handleKeyDown}>
            <h2 className="h2">
                <Translate id="register-password" />
            </h2>
            <Row className="my-4">
                <div className="col-lg-6 col-12 my-2">
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} size="lg" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput
                            id="password"
                            size="lg"
                            invalid={!!password && !validateStep()}
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            style={{ paddingLeft: 50 + "px" }}
                            required
                            autoFocus
                        />
                        <Tooltip>
                            Password must have at least 8 characters.
                        </Tooltip>
                    </InputGroup>
                </div>
                <div className="col-lg-6 col-12 my-2">
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} size="lg" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput
                            size="lg"
                            invalid={!!passwordConfirmation && !validateStep()}
                            type="password"
                            onChange={(e) => {
                                setPasswordConfirmation(e.target.value);
                            }}
                            value={passwordConfirmation}
                            style={{ paddingLeft: 50 + "px" }}
                            required
                        />
                    </InputGroup>
                </div>
            </Row>
            <RippledButton size="lg" onClick={previousStep}>
                <Translate id="register-back" />
            </RippledButton>
            <RippledButton size="lg" onClick={nextStep} className="float-right">
                <Translate id="register-next" />
            </RippledButton>
        </Step>
    );
}
