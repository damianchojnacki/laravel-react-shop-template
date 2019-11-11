import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import {Link} from 'react-router-dom';

export default function NavExample() {
    return (
        <Nav style={{paddingTop: 20+'px', paddingBottom: 20+'px'}}>
            <NavItem>
                <Link className="nav-link" to="/">Homepage</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/">Products</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/">Contact</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/login">Login</Link>
            </NavItem>
        </Nav>
    );
}