import React from 'react';
import Shop from "../../../layouts/Shop";
import {
    InertiaLink,
    usePage
} from "@inertiajs/inertia-react";

function Orders({orders}){
    const {currency} = usePage();

    return (
        <Shop>

            <h3 className="text-left w-100 mx-3 mt-5 mb-4">Your orders:</h3>

            <table className="table">
                <thead className="text-primary">
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Purchase date</th>
                    <th className="text-center">Value</th>
                    <th>Order status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {orders.length && orders.map((order, index) =>
                        <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.id}</td>
                            <td>{order.created_at}</td>
                            <td className="text-center">{order.value} {currency.symbol}</td>
                            <td>{order.status.name}</td>
                            <td className="text-right">
                                <InertiaLink className="btn btn-primary" href="/user/orders/products">Details</InertiaLink>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Shop>
    )
}

export default Orders;
