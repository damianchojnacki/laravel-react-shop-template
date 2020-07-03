import * as React from "react";
import CurrencyService from "./CurrencyService";

const CurrencyContext = React.createContext();

const useCurrency = () => React.useContext(CurrencyContext);

const initialState = CurrencyService.get();

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            CurrencyService.reset();

            return initialState;
        case "change":
            CurrencyService.change(action.payload);

            return action.payload;
    }
};

function CurrencyContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <CurrencyContext.Provider value={value}>{props.children}</CurrencyContext.Provider>
    );
}

export { CurrencyContextProvider, useCurrency };
