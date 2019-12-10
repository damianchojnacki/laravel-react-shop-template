import React from "react";
import { Nav, NavItem } from "shards-react";
import AuthService from "../utils/AuthService";
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from "../utils/AuthContext";

function Menu(props){
    const { state, dispatch } = React.useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();

        AuthService.logout();
        dispatch({ type: "logout" });
    };

    return (
        <Nav style={{paddingTop: '20px', paddingBottom: '20px'}}>
            {props.routes && props.routes.map((prop, key) => {
                if (prop.name === "Login" && state.authenticated) return null;
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
    );
}

export default Menu;
