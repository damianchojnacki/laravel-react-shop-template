import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "shards-react";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";

function ProductsList(props){
    return (
        <table className="table">
            <thead className="text-primary">
            <tr>
                <th>Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th/>
                <th/>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((product, index) =>
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td className="text-center">{product.price} USD</td>
                        <td className="text-center">{product.quantity}</td>
                        <td>
                            <Button theme="light" size="sm" pill outline onClick={() => props.changeQuantity(product, true)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </Button>
                        </td>
                        <td>
                            <Button theme="light" size="sm" pill outline onClick={() => props.changeQuantity(product, false)}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </Button>
                        </td>
                    </tr>
                ) : null}
                <tr>
                    <td colSpan="5" className="text-right">
                        Sum: {props.sum} USD
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProductsList;
