import React from "react";
import { Button, FormCheckbox } from "shards-react";
import Translate from "../../Translate";
import RippledButton from "../RippledButton";
import Step from "./Step";

export default function Terms({
    handleKeyDown,
    previousStep,
    handleSubmit,
    terms,
    setTerms,
}) {
    return (
        <Step handleKeyDown={handleKeyDown}>
            <h2 className="h1">
                <Translate id="register-terms-title" />
            </h2>
            <p>
                <Translate id="register-terms-subtitle" />
            </p>
            <FormCheckbox
                onChange={() => {
                    setTerms(!terms);
                }}
                checked={terms}
                className="my-4"
            >
                <Translate id="register-terms-label" />
            </FormCheckbox>
            <RippledButton size="lg" onClick={previousStep}>
                <Translate id="register-back" />
            </RippledButton>
            <RippledButton
                size="lg"
                onClick={handleSubmit}
                className="float-right"
            >
                <Translate id="register-submit" />
            </RippledButton>
        </Step>
    );
}
