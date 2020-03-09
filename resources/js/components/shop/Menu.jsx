import React, {useState, useEffect} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from "shards-react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import routes from '../../routes/shop';
import {isMobile} from "../../utils/helpers";
import CurrencySelect from "./CurrencySelect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";

function Menu() {
    const {auth} = usePage();

    const [navbarOpened, setNavbarOpened] = useState(false);

    return (
        <Navbar type="dark" theme="primary" expand="md" className="mb-4">
            <InertiaLink href="/">
                <NavbarBrand tag="div">Shop Template</NavbarBrand>
            </InertiaLink>
            <NavbarToggler onClick={() => setNavbarOpened(!navbarOpened)} />

            <Collapse open={navbarOpened} navbar>
                <Nav navbar className="flex-grow-1">
                    {routes && routes.map((prop, key) => {
                        if (prop.name === "Login" && auth.user) return null;
                        if (prop.name === "Register" && auth.user) return null;
                        if (prop.hidden) return null;
                        return (
                            <NavItem key={key}>
                                <InertiaLink className="nav-link" href={prop.link ?? prop.path}>{prop.name}</InertiaLink>
                            </NavItem>
                        );
                    })}
                    {auth.user &&
                        <NavItem>
                            <InertiaLink className="nav-link" href="/logout" method="post">Logout</InertiaLink>
                        </NavItem>
                    }
                    <div className="d-flex align-items-center flex-grow-1 justify-content-end flex-wrap">
                        <NavItem className={isMobile() ? "w-100" : null}>
                            <CurrencySelect/>
                        </NavItem>
                        <NavItem className={`text-center align-self-center text-white pl-4 ${isMobile() && "flex-grow-1 p-2"}`}>
                            <FontAwesomeIcon size={isMobile() ? "3x" : "2x"} icon={faUserCircle} className="align-middle"/>
                        </NavItem>
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
