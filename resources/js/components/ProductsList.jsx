import React from "react";
import {Table} from "reactstrap";
import {Link} from "react-router-dom";

function ProductsList(props){
    return (
        <Table responsive>
            <thead className="text-primary">
            <tr>
                {props.fields.index && <th>#</th>}
                {props.fields.id && <th>ID</th>}
                {props.fields.name && <th>Name</th>}
                {props.fields.type && <th>Type</th>}
                {props.fields.price && <th className="text-center">Price</th>}
                {props.fields.date && <th>Added at</th>}
                <th></th>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((product, index) =>
                    <tr key={product.id}>
                        {props.fields.index && <td>{index + 1}</td>}
                        {props.fields.id && <td>{product.id}</td>}
                        {props.fields.name && <td>{product.name}</td>}
                        {props.fields.type && <td>{product.type.name_display}</td>}
                        {props.fields.price && <td className="text-center">{product.price} USD</td>}
                        {props.fields.date && <td>{product.created_at}</td>}
                        <td className="text-right"><Link className={`btn btn-${props.bgColor}`} to={`/admin/products/${product.id}`}>Details</Link>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </Table>
    );
}

export default ProductsList;
