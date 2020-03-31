import React from 'react';
import Shop from "../../../layouts/Shop";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import OrderStatus from "../../../components/shop/OrderStatus";
import Text from "../../../components/Text";

function Orders({orders}){
    const {currency} = usePage();

    return (
        <Shop>
            <h3 className="text-left w-100 mx-3 mt-5 mb-4"><Text id="orders-header"/></h3>

            <table className="table">
                <thead className="text-primary">
                <tr>
                    <th>#</th>
                    <th className="hidden--mobile">ID</th>
                    <th><Text id="orders-date"/></th>
                    <th className="text-center"><Text id="orders-value"/></th>
                    <th><Text id="orders-status"/></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map((order, index) =>
                        <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td className="hidden--mobile">{order.id}</td>
                            <td>{order.created_at}</td>
                            <td className="text-center">{order.value} {currency.symbol}</td>
                            <td><OrderStatus status={order.status}/></td>
                            <td className="text-right">
                                <InertiaLink className="btn btn-primary" href="/user/orders/products"><Text id="orders-details"/></InertiaLink>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Shop>
    )
}

export default Orders;
