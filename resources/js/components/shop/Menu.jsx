import React, {useState} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from "shards-react";
import AuthService from "../../utils/AuthService";
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from "../../utils/AuthContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";
import {useMediaQuery} from "react-responsive";
import CurrencySelect from "./CurrencySelect";
import LanguageSelect from "./LanguageSelect";

function Menu(props) {
    const {state, dispatch} = React.useContext(AuthContext);
    const [navbarOpened, setNavbarOpened] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
                <Nav navbar className="flex-grow-1">
                    {props.routes && props.routes.map((prop, key) => {
                        if (prop.name === "Login" && state.authenticated) return null;
                        if (prop.name === "Register" && state.authenticated) return null;
                        if (prop.hidden) return null;
                        return (
                            <NavItem key={key}>
                                <NavLink className="nav-link" to={prop.link ?? prop.path}>{prop.name}</NavLink>
                            </NavItem>
                        );
                    })}
                    {state.authenticated &&
                        <NavItem>
                            <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                        </NavItem>
                    }
                    <div className="d-flex align-items-center flex-grow-1 justify-content-end flex-wrap">
                        <NavItem className={`d-flex align-items-center ${isMobile ? "w-100" : null}`}>
                            <CurrencySelect/>
                            <LanguageSelect/>
                        </NavItem>
                        {state.authenticated &&
                        <NavItem className={`text-center align-self-center text-white pl-3 ${isMobile && "flex-grow-1 p-2"}`}>
                            <NavLink to="/user">
                                <FontAwesomeIcon size={isMobile ? "3x" : "2x"} icon={faUserCircle} className="align-middle text-white"/>
                            </NavLink>
                        </NavItem>
                        }
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
