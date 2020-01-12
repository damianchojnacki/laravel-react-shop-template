import React from 'react';
import { Helmet } from 'react-helmet';
import ProductsNav from '../../components/shop/ProductsNav';

export default function Products(props){
    return (
        <>
            <Helmet>
                <title>Shop | Admin - Products</title>
            </Helmet>
            <main className="main">
                <ProductsNav {...props}/>
            </main>
        </>
    )
}
