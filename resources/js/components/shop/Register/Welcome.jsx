import React from "react";
import { Alert } from "shards-react";
import Translate from "../../Translate";
import Step from "./Step";
import RippledButton from "../RippledButton";

export default function Welcome({ handleKeyDown, errors, nextStep }) {
    return (
        <Step handleKeyDown={handleKeyDown}>
            <h1 className="mb-4">
                <Translate id="register-welcome" />
            </h1>
            {errors &&
                errors.map((e, index) => (
                    <Alert theme="danger" key={index}>
                        {e}
                    </Alert>
                ))}
            <RippledButton block size="lg" onClick={nextStep}>
                <Translate id="register-start" />
            </RippledButton>
        </Step>
    );
}
