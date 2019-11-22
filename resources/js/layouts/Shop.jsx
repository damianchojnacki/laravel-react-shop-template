import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";

import routes from "../routes.js";

import Api from "../utils/Api";
import {AuthContext} from "../utils/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/shards.css";

function Shop() {
    const {state, dispatch} = React.useContext(AuthContext);

    useEffect(() => {
        state.authenticated &&
            Api.getUser()
                .then(res => {
                    dispatch({type: "login", payload: res.data});
                })
                .catch(dispatch({type: "logout"}));
    }, []);

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/shop") {
                return (
                    <Route
                        exact
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />

                );
            } else {
                return null;
            }
        });
    };

    return (
        <div className="container">
            <Switch>
                {getRoutes(routes)}
            </Switch>
        </div>
    );
}

export default Shop;
