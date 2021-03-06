/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// reactstrap components
import {
    Button,
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroup,
    Modal,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown,
} from "reactstrap";
import { useAuth } from "../../../utils/stores/store";

function AdminNavbar(props) {
    const auth = useAuth();
    const [collapseOpen, setCollapseOpen] = useState(false);
    const [modalSearch, setModalSearch] = useState(false);
    const [color, setColor] = useState("navbar-transparent");

    useEffect(() => {
        window.addEventListener("resize", updateColor);

        return () => window.removeEventListener("resize", updateColor);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();

        auth.dispatch({ type: "logout" });
    };

    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    const updateColor = () => {
        window.innerWidth < 993 && collapseOpen
            ? setColor("bg-white")
            : setColor("navbar-transparent");
    };

    // this function opens and closes the collapse on small devices
    const toggleCollapse = () => {
        collapseOpen ? setColor("navbar-transparent") : setColor("bg-white");

        setCollapseOpen(!collapseOpen);
    };

    const toggleModalSearch = () => {
        setModalSearch(!modalSearch);
    };

    return (
        <>
            <Navbar
                className={classNames("navbar-absolute", color)}
                expand="lg"
            >
                <Container fluid>
                    <div className="navbar-wrapper">
                        <div
                            className={classNames("navbar-toggle d-inline", {
                                toggled: props.sidebarOpened,
                            })}
                        >
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={props.toggleSidebar}
                            >
                                <span className="navbar-toggler-bar bar1" />
                                <span className="navbar-toggler-bar bar2" />
                                <span className="navbar-toggler-bar bar3" />
                            </button>
                        </div>
                        <NavbarBrand
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            {props.brandText}
                        </NavbarBrand>
                    </div>
                    <button
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navigation"
                        data-toggle="collapse"
                        id="navigation"
                        type="button"
                        onClick={toggleCollapse}
                    >
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                    </button>
                    <Collapse navbar isOpen={collapseOpen}>
                        <Nav className="ml-auto" navbar>
                            <InputGroup className="search-bar">
                                <Button
                                    color="link"
                                    data-target="#searchModal"
                                    data-toggle="modal"
                                    id="search-button"
                                    onClick={toggleModalSearch}
                                >
                                    <i className="tim-icons icon-zoom-split" />
                                    <span className="d-lg-none d-md-block">
                                        Search
                                    </span>
                                </Button>
                            </InputGroup>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    nav
                                >
                                    <div className="notification d-none d-lg-block d-xl-block" />
                                    <i className="tim-icons icon-sound-wave" />
                                    <p className="d-lg-none">Notifications</p>
                                </DropdownToggle>
                                <DropdownMenu
                                    className="dropdown-navbar"
                                    right
                                    tag="ul"
                                >
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Mike John responded to your email
                                        </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            You have 5 more tasks
                                        </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Your friend Michael is in town
                                        </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Another notification
                                        </DropdownItem>
                                    </NavLink>
                                    <NavLink tag="li">
                                        <DropdownItem className="nav-item">
                                            Another one
                                        </DropdownItem>
                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <div className="photo">
                                        <i className="tim-icons icon-single-02"></i>
                                    </div>
                                    <p className="d-lg-none">Log out</p>
                                </DropdownToggle>
                                <DropdownMenu
                                    className="dropdown-navbar"
                                    right
                                    tag="ul"
                                >
                                    <NavLink tag="li">
                                        <DropdownItem
                                            className="nav-item"
                                            onClick={handleLogout}
                                        >
                                            Log out
                                        </DropdownItem>
                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <li className="separator d-lg-none" />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Modal
                modalClassName="modal-search"
                isOpen={modalSearch}
                toggle={toggleModalSearch}
            >
                <div className="modal-header">
                    <Input
                        id="inlineFormInputGroup"
                        placeholder="SEARCH"
                        type="text"
                    />
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalSearch}
                    >
                        <i className="tim-icons icon-simple-remove" />
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default AdminNavbar;
