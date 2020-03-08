import React, {useState, useEffect} from "react";
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from "shards-react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import routes from '../../routes/shop';
import Select from "react-select";
import {Inertia} from "@inertiajs/inertia";
import {isMobile} from "../../utils/helpers";
import CurrencyService from "../../utils/CurrencyService";

function Menu() {
    const {auth, currencies, currency} = usePage();

    const [selectOptions, setSelectOptions] = useState([]);
    const [navbarOpened, setNavbarOpened] = useState(false);

    useEffect(() => {
        setSelectOptions(currencies.map(item => {
            return {
                id: item.id,
                value: item.iso,
                label:
                    <div className="font-weight-normal text-secondary">
                        <span className="font-italic">{item.iso}</span>
                        <span className="ml-2 pl-2 border-left">{item.symbol}</span>
                    </div>
            }
        }));
    }, []);

    return (
        <Navbar type="dark" theme="primary" expand="md" className="mb-4">
            <InertiaLink href="/">
                <NavbarBrand tag="div">Shop Template</NavbarBrand>
            </InertiaLink>
            <NavbarToggler onClick={() => setNavbarOpened(!navbarOpened)} />

            <Collapse open={navbarOpened} navbar>
                <Nav navbar className="flex-grow-1">
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
                    <NavItem className="d-flex align-items-center flex-grow-1 justify-content-end">
                        <Select
                            options={selectOptions}
                            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                            styles={{
                                container: (provided) => ({
                                    ...provided,
                                    width: isMobile() ? "100%" : 85,
                                    margin: isMobile() ? ".5rem 0" : 0,
                                    textAlign: "center",
                                }),
                                control: (provided) => ({
                                    ...provided,
                                    borderRadius: 5
                                }),
                                valueContainer: (provided) => ({
                                    ...provided,
                                    display: "flex",
                                    justifyContent: "center"
                                })
                            }}
                            value={selectOptions.find(option => {return currency.iso === option.value})}
                            onChange={e => CurrencyService.update(e.value)}
                        />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
