import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";

import routes from "../routes/shop.js";

import AuthService from "../utils/AuthService";
import {AuthContext} from "../utils/AuthContext";

import Notifications from 'react-notify-toast';

import "shards-ui/dist/css/shards.min.css";
import Menu from "../components/shop/Menu";
import Footer from "../components/shop/Footer";
import {CartContextProvider} from "../utils/CartContext";
import Cart from "../components/shop/Cart";

function Shop(props) {
    const {state, dispatch} = React.useContext(AuthContext);

    useEffect(() => {
        state.authenticated &&
            AuthService.getUser()
                .then(res => {
                    dispatch({type: "login", payload: res.data});
                })
                .catch(dispatch({type: "logout"}));
    }, []);

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            return (
                <Route
                    exact
                    {...props}
                    path={prop.path}
                    render={(props) => <prop.component {...props} />}
                    key={key}
                />
            );
        });
    };

    return (
        <CartContextProvider>
            <Notifications/>
            <div className="p-0 container d-flex flex-column" style={{minHeight: "100vh"}}>
                <Cart/>
                <Menu {...props} routes={routes}/>
                <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                    <Switch>
                        {getRoutes(routes)}
                    </Switch>
                </div>
                <Footer/>
            </div>
        </CartContextProvider>
    );
}

export default Shop;
