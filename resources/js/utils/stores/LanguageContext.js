import React, { createContext, useContext, useState } from "react";
import LanguageService from "../services/LanguageService";

const LanguageContext = createContext();

const language = () => useContext(LanguageContext);

const initialState = LanguageService.current();

function LanguageContextProvider(props) {
    const [state, setState] = useState(initialState);

    const change = (name) => {
        LanguageService.set(name);

        setState(name);
    };

    return (
        <LanguageContext.Provider value={{ state, change }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export { LanguageContextProvider, language };
