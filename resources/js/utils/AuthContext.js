import * as React from "react";

const AuthContext = React.createContext();

const initialState = {
    authenticated: !!localStorage.getItem('access_token'),
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "login":
            return {
                ...state,
                authenticated: true,
                user: action.payload
            };
        case "logout":
            return {
                ...state,
                authenticated: false,
                user: null
            };
    }
};

function AuthContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
}

const AuthContextConsumer = AuthContext.Consumer;

export { AuthContext, AuthContextProvider, AuthContextConsumer };
