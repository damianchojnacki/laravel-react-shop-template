import React from "react";
import {Table} from "reactstrap";
import {InertiaLink} from "@inertiajs/inertia-react";

function OrdersList(props){
    return (
        <Table responsive>
            <thead className="text-primary">
            <tr>
                {props.fields.index && <th>#</th>}
                {props.fields.id && <th>ID</th>}
                {props.fields.date && <th>Purchase date</th>}
                {props.fields.email && <th>Customer email</th>}
                {props.fields.value && <th className="text-center">Value</th>}
                {props.fields.status && <th>Order status</th>}
                <th></th>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((order, index) =>
                    <tr key={order.id}>
                        {props.fields.index && <td>{index + 1}</td>}
                        {props.fields.id && <td>{order.id}</td>}
                        {props.fields.date && <td>{order.created_at}</td>}
                        {props.fields.email && <td>{order.user.email}</td>}
                        {props.fields.value && <td className="text-center">{order.value} USD</td>}
                        {props.fields.status && <td>{order.status.name}</td>}
                        <td className="text-right"><InertiaLink className={`btn btn-${props.bgColor}`} href={`/admin/orders/${order.id}`}>Details</InertiaLink>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </Table>
    );
}

export default OrdersList;
