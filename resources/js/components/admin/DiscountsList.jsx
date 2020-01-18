import React from "react";
import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";

function DiscountsList(props){
    return (
        <Table responsive>
            <thead className="text-primary">
            <tr>
                <th>#</th>
                <th>Product</th>
                <th>Percent off</th>
                <th>Product price</th>
                <th>Final price</th>
                <th>Ends</th>
                <th>Added at</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((discount, index) =>
                    <tr key={discount.id}>
                        <td>{index + 1}</td>
                        <td>{discount.product.name}</td>
                        <td>{discount.percent_off} %</td>
                        <td>{discount.product.price} USD</td>
                        <td>{discount.product.final_price} USD</td>
                        <td>{discount.ends}</td>
                        <td>{discount.created_at}</td>
                        <td className="text-right"><Button className="btn btn-danger" onClick={() => props.deleteDiscount(discount)}>Delete</Button>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </Table>
    );
}

export default DiscountsList;
