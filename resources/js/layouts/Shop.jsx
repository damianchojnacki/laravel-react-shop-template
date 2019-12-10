import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";

import routes from "../routes/shop.js";

import AuthService from "../utils/AuthService";
import {AuthContext} from "../utils/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import "shards-ui/dist/css/shards.min.css";
import Menu from "../components/Menu";

function Shop() {
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
                    path={prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        });
    };

    return (
        <div className="container">
            <Menu routes={routes}/>
            <Switch>
                {getRoutes(routes)}
            </Switch>
        </div>
    );
}

export default Shop;
