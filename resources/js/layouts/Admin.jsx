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
import React, {useState, useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.jsx";

import routes from "../routes.js";

import "../assets/scss/black-dashboard-react.scss";
import "../assets/demo/demo.css";
import "../assets/css/nucleo-icons.css";
import PerfectScrollbar from "perfect-scrollbar";
import Api from "../utils/Api";
import {AuthContext} from "../utils/AuthContext";

function Admin(props) {

    const { state, dispatch } = React.useContext(AuthContext);
    const [backgroundColor, setBackgroundColor] = useState("blue");
    const [sidebarOpened, setSidebarOpened] =  useState(document.documentElement.className.indexOf("nav-open") !== -1);
    const [redirectBack, setRedirectBack] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        state.authenticated ?
            Api.getUser()
                .then(res => {
                    dispatch({type: "login", payload: res.data});
                })
                .catch(dispatch({type: "logout"}))
                .finally(() => {setLoading(false)})
            :
            setLoading(false);
    }, []);

    useEffect(() => {
        (!loading && (!state.authenticated || state.user.name !== 'admin')) && setRedirectBack(true);

        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) new PerfectScrollbar(tables[i]);
    });

    const toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        setSidebarOpened(!sidebarOpened);
    };

    const handleBgClick = color => {
        setBackgroundColor(color);
    };

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    const getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    return redirectBack ? <Redirect to="/"/>  :
        (
            <>
                <div className="wrapper black-dashboard">
                    <Sidebar
                        {...props}
                        routes={routes}
                        bgColor={backgroundColor}
                        toggleSidebar={toggleSidebar}
                    />
                    <div
                        className="main-panel"
                        data={backgroundColor}
                    >
                        <AdminNavbar
                            {...props}
                            brandText={getBrandText(props.location.pathname)}
                            toggleSidebar={toggleSidebar}
                            sidebarOpened={sidebarOpened}
                        />
                        <Switch>
                            {getRoutes(routes)}
                            <Redirect from="/admin" to="admin/dashboard"/>
                        </Switch>
                        {// we don't want the Footer to be rendered on map page
                            props.location.pathname.indexOf("maps") !== -1 ? null : (
                                <Footer fluid/>
                            )}
                    </div>
                </div>
                <FixedPlugin
                    bgColor={backgroundColor}
                    handleBgClick={handleBgClick}
                />
            </>
        );
}

export default Admin;
