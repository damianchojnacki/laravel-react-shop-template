import React, {useState} from 'react';
import {FormInput, InputGroup, InputGroupAddon, InputGroupText, Nav, NavItem, NavLink} from "shards-react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {isMobile} from "../../utils/helpers";

export default function ProductsNav(props){
    const names = {
        cpu: {
            full: "Processors",
            short: "CPU",
        },
        gpu: {
            full: "Graphic cards",
            short: "GPU",
        },
        hdd: {
            full: "Hard disks",
            short: "HDD",
        },
        ssd: {
            full: "SSD's",
            short: "SSD's",
        },
    };

    const displayName = (name) => {
        return isMobile() ? name.short : name.full;
    };

    const pages = ["cpu", "gpu", "hdd", "ssd"];

    const navList = pages.map(page =>
        <NavItem key={page}>
            <NavLink tag="span" active={props.category === page}>
                <Link to={`/products/${page}`} className={props.category === page ? "text-light" : null}>
                    {displayName(names[page])}
                </Link>
            </NavLink>
        </NavItem>
    );

    return (
        <>
            <Nav className="px-2" pills>
                <NavItem>
                    <NavLink tag="span" active={!props.category}>
                        <Link to="/products" className={!props.category ? "text-light" : null}>
                            All
                        </Link>
                    </NavLink>
                </NavItem>
                {navList}
                <NavItem className={isMobile() ? "w-100 my-4 ml-auto" : "ml-auto"} >
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput type="text" onChange={(e) => props.search(e.target.value)} placeholder="Search product" required/>
                    </InputGroup>
                </NavItem>
            </Nav>
        </>
    )
}
