/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";

import ShopLayout from './layouts/Shop';
import AdminLayout from "./layouts/Admin";

import {AuthContextProvider} from './utils/AuthContext';

const hist = createBrowserHistory();

require('./bootstrap');

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <AuthContextProvider>
                <Route path="/" render={(props) => <ShopLayout {...props} />}/>
                <Route path="/admin" render={props => <AdminLayout {...props} />}/>
            </AuthContextProvider>
        </Switch>
    </Router>,
    document.getElementById("root")
);
