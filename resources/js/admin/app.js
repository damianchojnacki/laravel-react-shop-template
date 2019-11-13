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
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./layouts/Admin/Admin.jsx";

import "./assets/css/black-dashboard-react.css";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import {isAuthenticated} from "./utils/auth";
import axios from "axios";

const hist = createBrowserHistory();

require('../bootstrap');

isAuthenticated() ?
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`
:
window.location.assign(window.location.origin.toString());

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
