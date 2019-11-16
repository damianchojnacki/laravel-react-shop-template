import React from "react";
import { Nav, NavItem } from "shards-react";
import Api from "../utils/Api";
import {Link, NavLink} from 'react-router-dom';
import routes from "../routes";
import {AuthContext} from "../utils/AuthContext";

function Menu(){
    const { state, dispatch } = React.useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();

        Api.logout();
        dispatch({ type: "logout" });
    };

    return (
        <Nav style={{paddingTop: 20+'px', paddingBottom: 20+'px'}}>
            {routes.map((prop, key) => {
                if (prop.name === "Login" && state.authenticated) return null;
                return prop.layout === '/shop' &&
                    (
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