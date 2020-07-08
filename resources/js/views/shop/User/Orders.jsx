import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import OrderStatus from "../../../components/shop/OrderStatus";
import Translate from "../../../components/Translate";
import {useCurrency} from "../../../utils/CurrencyContext";
import OrderService from "../../../utils/OrderService";

function Orders(){
    const currency = useCurrency();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const orders = await OrderService.recent();

            setOrders(orders);
        })();
    }, []);

    return (
        <>
            <h3 className="text-left w-100 mx-3 mt-5 mb-4">
                <Translate id="orders-header"/>
            </h3>

            <table className="table">
                <thead className="text-primary">
                <tr>
                    <th>#</th>
                    <th className="hidden--mobile">ID</th>
                    <th><Translate id="orders-date"/></th>
                    <th className="text-center"><Translate id="orders-value"/></th>
                    <th><Translate id="orders-status"/></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {orders.length > 0 && orders.map((order, index) =>
                    <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td className="hidden--mobile">{order.id}</td>
                        <td>{order.created_at}</td>
                        <td className="text-center">{order.value} {currency.state.symbol}</td>
                        <td><OrderStatus status={order.status}/></td>
                        <td className="text-right">
                            <Link className="btn btn-primary" to="/user/orders/products">
                                <Translate id="orders-details"/>
                            </Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export default Orders;
