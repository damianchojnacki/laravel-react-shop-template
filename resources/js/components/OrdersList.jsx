import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

function OrdersList(props){
    return (
        <table className="table">
            <thead className="text-primary">
            <tr>
                <th>#</th>
                <th>Purchase date</th>
                <th>Customer email</th>
                <th className="text-center">Value</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {props.orders ? props.orders.map((order, index) =>
                    <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.created_at}</td>
                        <td>{order.user.email}</td>
                        <td className="text-center">{order.value} USD</td>
                        <td className="text-right"><Link className={`btn btn-${props.bgColor}`} to={`/admin/orders/${order.id}`}>Details</Link>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </table>
    );
}

export default OrdersList;
