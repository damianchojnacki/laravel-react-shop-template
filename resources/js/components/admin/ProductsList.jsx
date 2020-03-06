import React from "react";
import {Table} from "reactstrap";
import Button from "reactstrap/es/Button";
import {InertiaLink} from "@inertiajs/inertia-react";

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
                {props.fields.price_final && <th className="text-center">Final price</th>}
                {props.fields.date && <th>Added at</th>}
                <th></th>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((product, index) =>
                    <tr key={product.id} className={props.product && (props.product === product.id || props.products.includes(product)) ? "table-warning" : null}>
                        {props.fields.index && <td>{index + 1}</td>}
                        {props.fields.id && <td>{product.id}</td>}
                        {props.fields.name && <td>{product.name}</td>}
                        {props.fields.type && <td>{product.type.long}</td>}
                        {props.fields.price && <td className="text-center">{product.price} USD</td>}
                        {props.fields.price_final && <td className="text-center">{product.price_final} USD</td>}
                        {props.fields.date && <td>{product.created_at}</td>}
                        {props.add ?
                            <td className="text-right">
                                <Button color="success" onClick={() => props.add(product)}>Add</Button>
                            </td> :
                            <td className="text-right">
                                <InertiaLink className={`btn btn-${props.bgColor}`} href={`/admin/products/${product.id}`}>Details</InertiaLink>
                            </td>
                        }
                        {props.remove && props.products.includes(product) &&
                            <td className="text-right">
                                <Button color="danger" onClick={() => props.remove(product.id)}>Remove</Button>
                            </td>
                        }
                    </tr>
                ) : null}
            </tbody>
        </Table>
    );
}

export default ProductsList;
