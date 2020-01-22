import React, {useEffect, useState} from 'react';
import {FormInput, InputGroup, InputGroupAddon, InputGroupText, Nav, NavItem, NavLink} from "shards-react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {isMobile, newArray} from "../../../utils/helpers";
import ProductService from "../../../utils/ProductService";
import "./style.scss";

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
                    ></span>
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

ProductsNav.defaultProps = {
    productTypes: newArray(4, {
        name: '',
        short: '',
        long: '',
    })
};
