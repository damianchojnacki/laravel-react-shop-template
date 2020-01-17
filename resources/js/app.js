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
import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const ShopLayout = lazy(() => import('./layouts/Shop'));
const AdminLayout = lazy(() => import("./layouts/Admin"));

import {AuthContextProvider} from './utils/AuthContext';

const hist = createBrowserHistory();

require('./bootstrap');

import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./components/Loading";

ReactDOM.render(
    <Router history={hist}>
        <Suspense fallback={<Loading/>}>
            <AuthContextProvider>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />}/>
                    <Route path="/" render={(props) => <ShopLayout {...props} />}/>
                </Switch>
            </AuthContextProvider>
        </Suspense>
    </Router>,
    document.getElementById("root")
);

//TODO render only one main view
