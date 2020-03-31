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
import React, {useEffect, useState} from "react";

import Notifications from 'react-notify-toast';
// core components
import AdminNavbar from "../components/admin/Navbars/AdminNavbar.jsx";
import Footer from "../components/admin/Footer/Footer.jsx";
import Sidebar from "../components/admin/Sidebar/Sidebar.jsx";
import FixedPlugin from "../components/admin/FixedPlugin/FixedPlugin.jsx";

import routes from "../routes/admin.js";

import "../assets/scss/black-dashboard-react.scss";
import "../assets/css/nucleo-icons.css";

import PerfectScrollbar from "perfect-scrollbar";

function Admin(props) {
    const [backgroundColor, setBackgroundColor] = useState(localStorage.getItem('background'));
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode'));
    const [sidebarOpened, setSidebarOpened] =  useState(document.documentElement.className.indexOf("nav-open") !== -1);

    useEffect(() => {
        darkMode === 'light' ?  document.body.classList.add("white-content") : document.body.classList.remove("white-content");
    }, []);

    useEffect(() => {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) new PerfectScrollbar(tables[i]);
    });

    const toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        setSidebarOpened(!sidebarOpened);
    };

    const handleBgClick = color => {
        localStorage.setItem('background', color);
        setBackgroundColor(color);
    };

    const handleDarkModeClick = color => {
        localStorage.setItem('darkMode', color);
        setDarkMode(color);

        color === 'light' ?  document.body.classList.add("white-content") : document.body.classList.remove("white-content");
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

    return (
        <>
            <Notifications/>
            <div className="wrapper black-dashboard">
                <Sidebar
                    {...props}
                    routes={routes}
                    bgColor={backgroundColor}
                    toggleSidebar={toggleSidebar}
                />
                <div
                    className={`main-panel ${backgroundColor}`}
                >
                    <AdminNavbar
                        {...props}
                        brandText={getBrandText(props.location.pathname)}
                        toggleSidebar={toggleSidebar}
                        sidebarOpened={sidebarOpened}
                    />
                    {// we don't want the Footer to be rendered on map page
                        props.location.pathname.indexOf("maps") !== -1 ? null : (
                            <Footer fluid/>
                        )}
                </div>
            </div>
            <FixedPlugin
                bgColor={backgroundColor}
                handleBgClick={handleBgClick}
                handleDarkModeClick={handleDarkModeClick}
            />
        </>
    );
}

export default Admin;
