import React, {useState} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from "shards-react";
import AuthService from "../../utils/AuthService";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import routes from '../../routes/shop';

function Menu(props) {
    const [navbarOpened, setNavbarOpened] = useState(false);

    const {auth} = usePage();

    const handleLogout = (e) => {
        e.preventDefault();

        AuthService.logout();
        dispatch({type: "logout"});
    };

    return (
        <Navbar type="dark" theme="primary" expand="md" className="mb-4">
            <InertiaLink href="/">
                <NavbarBrand tag="div">Shop Template</NavbarBrand>
            </InertiaLink>
            <NavbarToggler onClick={() => setNavbarOpened(!navbarOpened)} />

            <Collapse open={navbarOpened} navbar>
                <Nav navbar>
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
                            <InertiaLink className="nav-link" href="#" onClick={handleLogout}>Logout</InertiaLink>
                        </NavItem>
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
