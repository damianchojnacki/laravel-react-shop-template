import React, {useEffect, useState} from 'react';
import {FormInput, InputGroup, InputGroupAddon, InputGroupText, Nav, NavItem, NavLink} from "shards-react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {isMobile, newArray} from "../../../utils/helpers";
import ProductService from "../../../utils/ProductService";
import "./style.scss";
import Select from "react-select";

export default function ProductsNav(props){

    const [productTypes, setProductTypes] = useState(props.productTypes);

    useEffect(() => {
        (async () => {
            const productTypes = await ProductService.types();

            setProductTypes(productTypes);
        })();
    }, []);

    const navList = productTypes.length && productTypes.map(page =>
        <NavItem key={page.id}>
            <NavLink tag="span" active={props.category === page.name}>
                <Link
                    to={`/products/${page.name}`}
                    className={props.category === page.name ? "text-light" : null}
                >
                    <span
                        className="products-nav__dynamic"
                        data-shortname={page.short}
                        data-longname={page.long}
                    />
                </Link>
            </NavLink>
        </NavItem>
    );

    return (
        <>
            <Nav className="px-2 justify-content-between align-items-center flex-wrap" pills>
                <NavItem>
                    <NavLink tag="span" active={!props.category}>
                        <Link to="/products" className={!props.category ? "text-light" : null}>
                            All
                        </Link>
                    </NavLink>
                </NavItem>

                {navList}

                <NavItem className="products-nav__sort">
                    <Select
                        options={[
                            {
                                value: 1,
                                sort: "name",
                                type: "asc",
                                label: "Sort by name (asc)",
                            },
                            {
                                value: 2,
                                sort: "name",
                                type: "desc",
                                label: "Sort by name (desc)",
                            },
                            {
                                value: 3,
                                sort: "price",
                                type: "asc",
                                label: "Sort by price (asc)",
                            },
                            {
                                value: 4,
                                sort: "price",
                                type: "desc",
                                label: "Sort by price (desc)",
                            },
                        ]}
                        placeholder="Sort by"
                        onChange={(e) => {props.setSort(e)}}
                        value={props.sort}
                    />
                </NavItem>

                <NavItem className="products-nav__search">
                    <InputGroup seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput type="text" onChange={(e) => props.search(e.target.value)} placeholder="Search product" value={props.searchField ? props.searchField : ''} required/>
                    </InputGroup>
                </NavItem>
            </Nav>
        </>
    )
}

ProductsNav.defaultProps = {
    productTypes: newArray(4, {
        name: '',
        short: '',
        long: '',
    })
};
