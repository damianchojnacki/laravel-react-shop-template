import * as React from "react";
import Cookies from 'js-cookie';
import AuthService from "../services/AuthService";

const AuthContext = React.createContext();

const useAuth = () => React.useContext(AuthContext);

const initialState = {
    authenticated: !!Cookies.get('access_token'),
    user: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "login":
            AuthService.logRocketIdentify(action.payload);

            return {
                ...state,
                authenticated: true,
                user: action.payload
            };
        case "logout":
            AuthService.logout();

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

export { AuthContextProvider, useAuth };
