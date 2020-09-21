import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../utils/routes/shop.js";

import AuthService from "../utils/services/AuthService";
import { useAuth } from "../utils/stores/store";

import Notifications from "react-notify-toast";

import "shards-ui/dist/css/shards.min.css";
import Menu from "../components/shop/Menu";
import Footer from "../components/shop/Footer";
import { CartContextProvider } from "../utils/stores/store";
import Cart from "../components/shop/Cart";
import { CurrencyContextProvider } from "../utils/stores/store";

function Shop(props) {
    const auth = useAuth();

    useEffect(() => {
        auth.state.authenticated &&
            AuthService.getUser()
                .then((res) =>
                    auth.dispatch({ type: "login", payload: res.data })
                )
                .catch(() => auth.dispatch({ type: "logout" }));
    }, []);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route
                    {...props}
                    exact
                    path={prop.path}
                    render={(props) => <prop.component {...props} />}
                    key={key}
                />
            );
        });
    };

    return (
        <>
            <Notifications />
            <div
                className="p-0 container d-flex flex-column"
                style={{ minHeight: "100vh" }}
            >
                <Cart />
                <Menu {...props} routes={routes} />
                <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                    <Switch>{getRoutes(routes)}</Switch>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Shop;
