import React, {useState} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from "shards-react";
import AuthService from "../../utils/AuthService";
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from "../../utils/AuthContext";
import Cart from "./Cart";

function Menu(props) {
    const {state, dispatch} = React.useContext(AuthContext);
    const [navbarOpened, setNavbarOpened] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();

        AuthService.logout();
        dispatch({type: "logout"});
    };

    return (
        <Navbar type="dark" theme="primary" expand="md" className="mb-4">
            <Link to="/">
                <NavbarBrand tag="div">Shop Template</NavbarBrand>
            </Link>
            <NavbarToggler onClick={() => setNavbarOpened(!navbarOpened)} />

            <Collapse open={navbarOpened} navbar>
                <Nav navbar>
                    {props.routes && props.routes.map((prop, key) => {
                        if (prop.name === "Login" && state.authenticated) return null;
                        if (prop.name === "Register" && state.authenticated) return null;
                        if (prop.hidden) return null;
                        return (
                            <NavItem key={key}>
                                <NavLink className="nav-link" to={prop.path}>{prop.name}</NavLink>
                            </NavItem>
                        );
                    })}
                    {state.authenticated &&
                        <NavItem>
                            <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                        </NavItem>
                    }
                </Nav>
                <div className="ml-auto">
                    <Cart/>
                </div>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
