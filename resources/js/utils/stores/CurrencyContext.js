import React, { createContext, useContext, useState } from "react";
import CurrencyService from "../services/CurrencyService";

const CurrencyContext = createContext();

const currency = () => useContext(CurrencyContext);

const initialState = CurrencyService.get();

function CurrencyContextProvider(props) {
    const [state, setState] = useState(initialState);

    const change = (name) => {
        CurrencyService.set(name);

        setState(name);
    };

    return (
        <CurrencyContext.Provider value={{ state, change }}>
            {props.children}
        </CurrencyContext.Provider>
    );
}

export { CurrencyContextProvider, currency };
