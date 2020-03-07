import React, {useState, useEffect} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from "shards-react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import routes from '../../routes/shop';
import Select from "react-select";
import {Inertia} from "@inertiajs/inertia";

function Menu(props) {
    const [navbarOpened, setNavbarOpened] = useState(false);

    const {auth, currencies, currency} = usePage();

    const [list, setList] = useState([]);

    useEffect(() => {
        setList(currencies.map(item => {
            return {
                id: item.id,
                value: item.iso,
                label:
                    <>
                        <span className="font-italic">{item.iso}</span>
                        <span className="ml-2 pl-2 border-left">{item.symbol}</span>
                    </>
            }
        }));
    }, []);

    function changeCurrency(e){
        Inertia.put(`/currency-change/${e.value}`);
    }

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
                            <InertiaLink className="nav-link" href="/logout" method="post">Logout</InertiaLink>
                        </NavItem>
                    }
                    <NavItem className="d-flex align-items-center" style={{width: "110px"}}>
                        <Select
                            options={list}
                            components={{ DropdownIndicator:() => null }}
                            styles={{
                                container: (provided, state) => ({
                                    ...provided,
                                    width: "120px",
                                    borderRadius: "10px"
                                })
                            }}
                            value={list.find(item => {return currency.iso === item.value})}
                            onChange={e => changeCurrency(e)}
                        />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
