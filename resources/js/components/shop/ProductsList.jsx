import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "shards-react";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import Translate from "../Translate";
import { useCurrency } from "../../utils/stores/store";
import { useCart } from "../../utils/stores/store";

function ProductsList(props) {
    const currency = useCurrency();
    const cart = useCart();

    return (
        <table className="table mb-0">
            <thead className="text-primary">
                <tr>
                    <th>
                        <Translate id="products-list-name" />
                    </th>
                    <th className="text-center">
                        <Translate id="products-list-price" />
                    </th>
                    <th className="text-center">
                        <Translate id="products-list-quantity" />
                    </th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.length > 0
                    ? props.data.map((product, index) => (
                          <tr key={product.id}>
                              <td className="align-middle">{product.name}</td>
                              <td className="text-center align-middle">
                                  {product.price_final} {currency.state.symbol}
                              </td>
                              <td className="text-center align-middle">
                                  {product.quantity}
                              </td>
                              <td>
                                  <Button
                                      theme="light"
                                      size="sm"
                                      pill
                                      outline
                                      onClick={() =>
                                          cart.dispatch({
                                              type: "add",
                                              payload: product.id,
                                          })
                                      }
                                  >
                                      <FontAwesomeIcon icon={faPlus} />
                                  </Button>
                              </td>
                              <td>
                                  <Button
                                      theme="light"
                                      size="sm"
                                      pill
                                      outline
                                      onClick={() =>
                                          cart.dispatch({
                                              type: "remove",
                                              payload: product.id,
                                          })
                                      }
                                  >
                                      <FontAwesomeIcon icon={faMinus} />
                                  </Button>
                              </td>
                          </tr>
                      ))
                    : null}
                <tr>
                    <td colSpan="5" className="text-right">
                        {props.sumWithDiscount ? (
                            <>
                                <span>
                                    <Translate id="products-list-sum" />
                                    <del className="line-through text-danger">
                                        {props.sum} {currency.state.symbol}
                                    </del>
                                </span>
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="mx-2"
                                />
                                {props.sumWithDiscount} {currency.state.symbol}
                            </>
                        ) : (
                            <>
                                <Translate id="products-list-sum" /> {props.sum}{" "}
                                {currency.state.symbol}
                            </>
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProductsList;
