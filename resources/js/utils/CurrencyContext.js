import * as React from "react";
import CurrencyService from "./CurrencyService";

const CurrencyContext = React.createContext();

const initialState = {
    currency: CurrencyService.get() ?? CurrencyService.default(),
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            CurrencyService.reset();

            return initialState;
        case "change":
            CurrencyService.change(action.payload);

            return {...state, currency: action.payload};
    }
};

function CurrencyContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <CurrencyContext.Provider value={value}>{props.children}</CurrencyContext.Provider>
    );
}

const CurrencyContextConsumer = CurrencyContext.Consumer;

export { CurrencyContext, CurrencyContextProvider, CurrencyContextConsumer };
