import React, {useState} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse, Badge} from "shards-react";
import AuthService from "../../utils/AuthService";
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from "../../utils/AuthContext";

function Footer(props) {
    return (
        <footer className="py-4 bg-secondary text-light" style={{zIndex: 4}}>
            <p className="text-center m-0">© 2020 Copyright <Badge tag="a" href="#">Damian Chojnacki</Badge></p>
        </footer>
    );
}

export default Footer;
