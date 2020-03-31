import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "shards-react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import routes from '../../routes/shop';
import CurrencySelect from "./CurrencySelect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";
import Text from '../Text';
import LanguageSelect from "./LanguageSelect";
import {useMediaQuery} from "react-responsive";

function Menu() {
    const {auth, app} = usePage();

    const [navbarOpened, setNavbarOpened] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Navbar type="dark" theme="primary" expand="md" className="mb-4">
            <InertiaLink href="/">
                <NavbarBrand tag="div">{app.name}</NavbarBrand>
            </InertiaLink>
            <NavbarToggler onClick={() => setNavbarOpened(!navbarOpened)} />

            <Collapse open={navbarOpened} navbar>
                <Nav navbar className="flex-grow-1">
                    {routes && routes.map((prop, key) => {
                        if (prop.name === "menu-login" && auth.user) return null;
                        if (prop.name === "menu-register" && auth.user) return null;
                        if (prop.hidden) return null;
                        return (
                            <NavItem key={key}>
                                <InertiaLink className="nav-link" href={prop.link ?? prop.path}>
                                    <Text id={prop.name}/>
                                </InertiaLink>
                            </NavItem>
                        );
                    })}
                    {auth.user &&
                        <NavItem>
                            <InertiaLink className="nav-link" href="/logout" method="post">
                                <Text id="menu-logout"/>
                            </InertiaLink>
                        </NavItem>
                    }
                    <div className="d-flex align-items-center flex-grow-1 justify-content-end flex-wrap">
                        <NavItem className={`d-flex align-items-center ${isMobile ? "w-100" : null}`}>
                            <CurrencySelect/>
                            <LanguageSelect/>
                        </NavItem>
                        {auth.user &&
                            <NavItem className={`text-center align-self-center text-white pl-3 ${isMobile && "flex-grow-1 p-2"}`}>
                                <InertiaLink href="/user">
                                    <FontAwesomeIcon size={isMobile ? "3x" : "2x"} icon={faUserCircle} className="align-middle text-white"/>
                                </InertiaLink>
                            </NavItem>
                        }
                    </div>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
