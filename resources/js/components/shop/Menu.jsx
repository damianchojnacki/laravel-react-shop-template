import React, { useState } from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from "shards-react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/stores/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { useMediaQuery } from "react-responsive";
import CurrencySelect from "./CurrencySelect";
import LanguageSelect from "./LanguageSelect";
import Translate from "../Translate";
import { StyleSheet, css } from "aphrodite";

function Menu(props) {
    const location = useLocation();

    const auth = useAuth();
    const [navbarOpened, setNavbarOpened] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const handleLogout = (e) => {
        e.preventDefault();

        auth.dispatch({ type: "logout" });
    };

    return (
        <Navbar type="dark" theme="primary" expand="md" className="mb-4">
            <Link to="/">
                <NavbarBrand tag="div">Shop Template</NavbarBrand>
            </Link>
            <NavbarToggler onClick={() => setNavbarOpened(!navbarOpened)} />

            <Collapse open={navbarOpened} navbar>
                <Nav navbar className="flex-grow-1">
                    {props.routes &&
                        props.routes.map((prop, key) => {
                            if (
                                prop.name === "menu-login" &&
                                auth.state.authenticated
                            )
                                return null;
                            if (
                                prop.name === "menu-register" &&
                                auth.state.authenticated
                            )
                                return null;
                            if (prop.hidden) return null;
                            return (
                                <NavItem key={key}>
                                    <NavLink
                                        className={`nav-link ${
                                            !!matchPath(location.pathname, {
                                                path: prop.path,
                                                exact: true,
                                            })
                                                ? "active"
                                                : css(styles.inactive)
                                        }`}
                                        to={prop.link ?? prop.path}
                                    >
                                        <Translate id={prop.name} />
                                    </NavLink>
                                </NavItem>
                            );
                        })}
                    {auth.state.authenticated && (
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="#"
                                onClick={handleLogout}
                            >
                                <Translate id="menu-logout" />
                            </Link>
                        </NavItem>
                    )}
                    <div className="d-flex align-items-center flex-grow-1 justify-content-end flex-wrap">
                        <NavItem
                            className={`d-flex align-items-center ${
                                isMobile ? "w-100" : null
                            }`}
                        >
                            <CurrencySelect />
                            <LanguageSelect />
                        </NavItem>
                        {auth.state.authenticated && (
                            <NavItem
                                className={`text-center align-self-center text-white pl-3 ${isMobile &&
                                    "flex-grow-1 p-2"}`}
                            >
                                <NavLink to="/user">
                                    <FontAwesomeIcon
                                        size={isMobile ? "3x" : "2x"}
                                        icon={faUserCircle}
                                        className="align-middle text-white"
                                    />
                                </NavLink>
                            </NavItem>
                        )}
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;

const styles = StyleSheet.create({
    inactive: {
        color: "rgba(255, 255, 255, 0.5)",
    },
});
