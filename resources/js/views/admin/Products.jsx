import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProductService from "../../utils/ProductService";

export default function Products(props){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ProductService.all().then(products => {
            setProducts(products);
            setLoading(false);
        });
    }, []);

    const productsTable = products.map((product, index) =>
        <tr key={product.id}>
            <td>{ index + 1 }</td>
            <td>{ product.name }</td>
            <td>{ product.type.name_display }</td>
            <td className="text-center">{ product.price } USD</td>
            <td className="text-right"><Link className={`btn btn-${props.bgColor}`} to={`/admin/products/${product.id}`}>Details</Link></td>
        </tr>
    );

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Products</title>
            </Helmet>
            <main className="content">
                <div className="col-md-12">
                    <div className="card-plain card">
                        <div className="card-header">
                            <h2 className="card-title">All products</h2>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive ps">
                                <table className="table">
                                    <thead className="text-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th className="text-center">Price</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {!loading ? productsTable : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
