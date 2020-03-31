import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "shards-react";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import CartService from "../../utils/CartService";
import {usePage} from "@inertiajs/inertia-react";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons/faCaretRight";
import Text from "../Text";

function ProductsList(props){
    const {currency} = usePage();

    return (
        <table className="table mb-0">
            <thead className="text-primary">
            <tr>
                <th>
                    <Text id="products-list-name"/>
                </th>
                <th className="text-center">
                    <Text id="products-list-price"/>
                </th>
                <th className="text-center">
                    <Text id="products-list-quantity"/>
                </th>
                <th/>
                <th/>
            </tr>
            </thead>
            <tbody>
                {(props.data && props.data.length > 0) ? props.data.map((product, index) =>
                    <tr key={product.id}>
                        <td className="align-middle">{product.name}</td>
                        <td className="text-center align-middle">{product.price_final} {currency.symbol}</td>
                        <td className="text-center align-middle">{product.quantity}</td>
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
                        {props.sumWithDiscount ?
                            <>
                                <span>
                                    <span>Sum: </span>
                                    <del className="line-through text-danger">{props.sum} {currency.symbol}</del>
                                </span>
                                <FontAwesomeIcon icon={faCaretRight} className="mx-2"/>
                                {props.sumWithDiscount} {currency.symbol}
                            </>
                        :
                            <>
                                <Text id="products-list-sum"/> {props.sum} {currency.symbol}
                            </>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProductsList;
