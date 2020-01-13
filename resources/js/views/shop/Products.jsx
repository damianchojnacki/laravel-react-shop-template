import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import ProductsNav from '../../components/shop/ProductsNav';
import {Button, Card, CardBody, CardFooter, CardHeader} from "shards-react";
import ProductsList from "../../components/admin/ProductsList";
import ProductsListComplex from "../../components/admin/ProductsListComplex";
import {Col} from "reactstrap";

export default function Products(props){
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

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Products</title>
            </Helmet>
            <main className="main my-2">
                <ProductsNav category={category} search={value => setSearchField(value)}/>

                <div className="col-md-12 p-0 mt-4 d-flex flex-wrap justify-content-between">
                    <ProductsListComplex data={products} width="25"/>

                    <Button className="btn-block my-4" onClick={showMoreOrReload}>{searchField ? "Reload" : "Show more"}</Button>
                </div>
            </main>
        </>
    )
}
