import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../routes.js";

import "shards-ui/dist/css/shards.min.css"
import Api from "../utils/Api";
import {AuthContext} from "../utils/AuthContext";

function Shop(){
  const { state, dispatch } = React.useContext(AuthContext);

  useEffect(() => {
    if(!!localStorage.getItem('access_token'))
      Api.getUser().then(res => {
        dispatch({ type: "login", payload: res.data });
      });
  }, []);

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/shop") {
        return (
          <Route
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
          <Switch>{getRoutes(routes)}</Switch>
    </div>
  );
}

export default Shop;
