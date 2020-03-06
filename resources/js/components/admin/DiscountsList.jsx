import React from "react";
import {Table} from "reactstrap";
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
                {(props.data && props.data.length > 0) ? props.data.map((product, index) =>
                    <tr key={product.discount.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.discount.percent_off} %</td>
                        <td>{product.price} USD</td>
                        <td>{product.final_price} USD</td>
                        <td>{product.discount.ends}</td>
                        <td>{product.discount.created_at}</td>
                        <td className="text-right">
                            <Button className="btn btn-danger" onClick={() => props.deleteDiscount(product.discount)}>Delete</Button>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </Table>
    );
}

export default DiscountsList;
