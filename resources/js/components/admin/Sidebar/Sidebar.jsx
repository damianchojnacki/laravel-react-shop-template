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
/*eslint-disable*/
import React, {useEffect, useRef} from "react";
// nodejs library to set properties for components
import {PropTypes} from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {Nav} from "reactstrap";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

let ps;

function Sidebar({ bgColor, routes, toggleSidebar}){
  const { app } = usePage();
  const sidebar = useRef();

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  }, []);

  return (
    <div className={`sidebar ${bgColor}`}>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {routes.map((prop, key) => {
            if (prop.redirect) return null;
            return !prop.hidden &&
              (
                <li key={key}>
                  <InertiaLink
                    href={prop.layout + prop.path}
                    className="nav-link"
                    onClick={toggleSidebar}
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </InertiaLink>
                </li>
              );
          })}
        </Nav>
      </div>
    </div>
  );
}
export default Sidebar;
