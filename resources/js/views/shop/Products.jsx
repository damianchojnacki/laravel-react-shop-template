import React from 'react';
import { Helmet } from 'react-helmet';

export default function Products(props){
    return (
        <>
            <Helmet>
                <title>Shop | Admin - Products</title>
            </Helmet>
            <div className="content">
                <main className="main">
                    Products content
                </main>
            </div>
        </>
    )
}
