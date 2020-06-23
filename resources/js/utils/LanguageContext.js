import * as React from "react";
import CurrencyService from "./CurrencyService";
import LanguageService from "./LanguageService";

const LanguageContext = React.createContext();

const initialState = LanguageService.current();

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            LanguageService.reset();

            return initialState;
        case "change":
            LanguageService.set(action.payload);

            return action.payload;
    }
};

function LanguageContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <LanguageContext.Provider value={value}>{props.children}</LanguageContext.Provider>
    );
}

const LanguageContextConsumer = LanguageContext.Consumer;

export { LanguageContext, LanguageContextProvider, LanguageContextConsumer };
