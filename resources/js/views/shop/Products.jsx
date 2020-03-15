import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import ProductsNav from '../../components/shop/ProductsNav';
import {Button} from "shards-react";
import ProductsListComplex from "../../components/shop/ProductListComplex";
import classnames from 'classnames';
import ProductService from "../../utils/ProductService";
import Shop from "../../layouts/Shop";

export default function Products({products, category, search, page}){
    const [sort, setSort] = useState({sort: "id", type: "asc"});

    const productsFlexClasses = classnames({
        "col-md-12": true,
        "p-0": true,
        "mt-4": true,
        "d-flex": true,
        "flex-wrap": true,
        "justify-content-between": products.length % 4 === 0,
    });

    return (
        <Shop>
            <div className="main my-2 d-flex flex-column flex-grow-1 w-100">
                <ProductsNav category={category} search={value => ProductService.search(value, category)} setSort={e => setSort(e)}/>

                <div className={productsFlexClasses}>
                    <ProductsListComplex data={products} sort={sort}/>

                    {(search || products.length % 12 === 0) &&
                        <Button className="btn-block my-4" onClick={() => ProductService.all(page + 1, category)}>{search ? "Reload" : "Show more"}</Button>
                    }
                </div>
            </div>
        </Shop>
    )
}
