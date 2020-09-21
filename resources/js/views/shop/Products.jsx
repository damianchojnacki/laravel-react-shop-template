import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import ProductsNav from '../../components/shop/ProductsNav';
import {Button} from "shards-react";
import ProductsListComplex from "../../components/shop/ProductListComplex";
import classnames from 'classnames';
import ProductService from "../../utils/services/ProductService";
import {newArray} from "../../utils/helpers";
import {useCurrency} from "../../utils/stores/CurrencyContext";
import Translate from "../../components/Translate";

export default function Products(props){
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [searchField, setSearchField] = useState("");
    const [sort, setSort] = useState({sort: "id", type: "asc"});
    const [category, setCategory] = useState(props.match.params.category);

    const currency = useCurrency();

    useEffect(() => {
        getProducts(true);
    }, [currency.state]);

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

    const getProducts = async fresh => {
        if(fresh){
            const newProducts = await ProductService.all(page, category);

            setProducts(newProducts);
        } else if(searchField){
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
            setSearchField('');
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

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Products</title>
            </Helmet>
            <main className="main my-2 d-flex flex-column flex-grow-1 w-100">
                <ProductsNav category={category} searchField={searchField} search={value => setSearchField(value)} setSort={e => setSort(e)}/>

                <div className={productsFlexClasses}>
                    <ProductsListComplex {...props} data={products.length ? products : props.products} sort={sort}/>

                    {(searchField || products.length % 12 === 0) &&
                        <Button className="btn-block my-4" onClick={showMoreOrReload}>{searchField ? <Translate id="products-reload"/> : <Translate id="products-showMore"/>}</Button>
                    }
                </div>
            </main>
        </>
    )
}

Products.defaultProps = {
    products: newArray(12, {
        name: '',
        price: '',
    })
};
