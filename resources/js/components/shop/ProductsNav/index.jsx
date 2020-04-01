import React from 'react';
import {FormInput, InputGroup, InputGroupAddon, InputGroupText, Nav, NavItem, NavLink} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {newArray} from "../../../utils/helpers";
import "./style.scss";
import Select from "react-select";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import Text from "../../Text";
import LanguageService from "../../../utils/LanguageService";

export default function ProductsNav(props){

    const {productsTypes} = usePage();

    const navList = productsTypes.length && productsTypes.map(page =>
        <NavItem key={page.id}>
            <NavLink tag="span" active={props.category === page.name}>
                <InertiaLink
                    href={`/products/all/1/${page.name}`}
                    className={props.category === page.name ? "text-light" : null}
                >
                    <span
                        className="products-nav__dynamic"
                        data-shortname={LanguageService.translate(`products-category-${page.name}-short`)}
                        data-longname={LanguageService.translate(`products-category-${page.name}-long`)}
                    />
                </InertiaLink>
            </NavLink>
        </NavItem>
    );

    return (
        <>
            <Nav className="px-2 justify-content-between align-items-center flex-wrap" pills>
                <NavItem>
                    <NavLink tag="span" active={!props.category}>
                        <InertiaLink href="/products/all" className={!props.category ? "text-light" : null}>
                            <Text id="products-category-all"/>
                        </InertiaLink>
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
                                label: <Text id="products-sort-name-asc"/>,
                            },
                            {
                                value: 2,
                                sort: "name",
                                type: "desc",
                                label: <Text id="products-sort-name-desc"/>,
                            },
                            {
                                value: 3,
                                sort: "price",
                                type: "asc",
                                label: <Text id="products-sort-price-asc"/>,
                            },
                            {
                                value: 4,
                                sort: "price",
                                type: "desc",
                                label: <Text id="products-sort-price-desc"/>,
                            },
                        ]}
                        placeholder=<Text id="products-sort-label"/>
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
                        <FormInput type="text" onChange={(e) => props.search(e.target.value)} placeholder={LanguageService.translate("products-search")} required/>
                    </InputGroup>
                </NavItem>
            </Nav>
        </>
    )
}

ProductsNav.defaultProps = {
    productsTypes: newArray(4, {
        name: '',
        short: '',
        long: '',
    })
};
