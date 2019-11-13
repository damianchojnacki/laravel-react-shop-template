import React from "react";
import { Nav, NavItem } from "shards-react";
import {logout, isAuthenticated} from "../utils/auth";
import {Link} from 'react-router-dom';

class Menu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            logged: props.logged,
        };
    }

    handleLogout = (e) => {
        e.preventDefault();

        logout();
        this.setState({logged: false});
    };

    render(){
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
                {isAuthenticated() ?
                    <NavItem>
                        <Link className="nav-link" to="#" onClick={this.handleLogout}>Logout</Link>
                    </NavItem>
                    :
                    <NavItem>
                        <Link className="nav-link" to="/login">Login</Link>
                    </NavItem>
                }
            </Nav>
        );
    }
}

export default Menu;