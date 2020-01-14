import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import ProductsNav from '../../components/shop/ProductsNav';
import {Button} from "shards-react";
import ProductsListComplex from "../../components/shop/ProductsListComplex";
import classnames from 'classnames';
import {CartContext} from "../../utils/CartContext";
import {notify} from "react-notify-toast";

export default function Products(props){
    const {state, dispatch} = React.useContext(CartContext);

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [searchField, setSearchField] = useState(null);
    const [category, setCategory] = useState(props.match.params.category);

    useEffect(() => {
        getProducts();
    }, [page, searchField, category]);

    useEffect(() => {
        if(category !== props.match.params.category){
            setProducts([]);
            setCategory(props.match.params.category);
        }
    });

    useEffect(() => {
        setPage(1);
    }, [category]);

    const getProducts = async () => {
        if(searchField && searchField !== ""){
            const found = await ProductService.search(searchField, category);

            setProducts(found);
        } else if(searchField === ""){
            setProducts([]);
            setPage(1);
            setSearchField(null);
        } else{
            const newProducts = await ProductService.all(page, category);

            setProducts(products.concat(newProducts));
        }
    };

    const showMoreOrReload = () => {
        if(searchField){
            setSearchField(null);
            setProducts([]);
            setPage(1);
        } else
            setPage(page + 1);
    };

    const productsFlexClasses = classnames({
        "col-md-12": true,
        "p-0": true,
        "mt-4": true,
        "d-flex": true,
        "flex-wrap": true,
        "justify-content-between": products.length % 4 === 0,
    });

    const addToCart = product => {
        dispatch({type: "add", payload: product.id});

        notify.show(`${product.name} has been added to cart.`, 'success', 1500);
    };

    const removeFromCart = product => {
        dispatch({type: "remove", payload: product.id});

        notify.show(`${product.name} has been removed to cart.`, 'success', 1500);
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Products</title>
            </Helmet>
            <main className="main my-2">
                <ProductsNav category={category} search={value => setSearchField(value)}/>

                <div className={productsFlexClasses}>
                    <ProductsListComplex {...props} data={products} width="25" addToCart={addToCart} removeFromCart={removeFromCart}/>

                    <Button className="btn-block my-4" onClick={showMoreOrReload}>{searchField ? "Reload" : "Show more"}</Button>
                </div>
            </main>
        </>
    )
}
