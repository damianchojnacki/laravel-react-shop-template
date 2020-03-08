import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "shards-react";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import CartService from "../../utils/CartService";
import {usePage} from "@inertiajs/inertia-react";

function ProductsList(props){
    const {currency} = usePage();

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
                        <td className="text-center">{product.price_final} {currency.symbol}</td>
                        <td className="text-center">{product.quantity}</td>
                        <td>
                            <Button theme="light" size="sm" pill outline onClick={() => CartService.add(product)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </Button>
                        </td>
                        <td>
                            <Button theme="light" size="sm" pill outline onClick={() => CartService.remove(product)}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </Button>
                        </td>
                    </tr>
                ) : null}
                <tr>
                    <td colSpan="5" className="text-right">
                        Sum: {props.sum} {currency.symbol}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProductsList;
