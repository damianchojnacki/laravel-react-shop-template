import React, {useState} from "react";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ListGroup, ListGroupItem,} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

import CartService from "../../../utils/CartService";
import {getSumOfProducts} from "../../../utils/helpers";
import Text from "../../Text";

import "./style.scss";

function Cart() {
    const {cart, currency} = usePage();
    const [opened, setOpened] = useState(false);

    return (
        <Dropdown dropup open={opened} className="cart" toggle={() => false}>
            <DropdownToggle className="cart__button" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon size="lg" icon={faShoppingCart}/>
            </DropdownToggle>
        <DropdownMenu right className={cart && cart.length <= 0 && "cart__empty"}>
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="cart__header">
                    <Text id="cart-header"/>
                </h4>
                {cart && cart.length > 0 &&
                    <div className="pr-4">
                        <Button size="sm" className="btn btn-secondary" onClick={() => CartService.empty()}>
                            <Text id="cart-clear"/>
                        </Button>
                    </div>
                }
            </div>
            {cart && cart.length > 0 ?
                <>
                    <DropdownItem tag="span" className="cart__products">
                        <ListGroup>
                            {cart.map(product =>
                                <ListGroupItem key={product.id}>
                                    <span className="cart__field">{product.name}</span>
                                    <span className="cart__field">{product.price_final} {currency.symbol}</span>
                                    <span className="cart__field">{product.quantity}</span>
                                    <span className="cart__field">
                                        <Button size="sm" className="btn btn-danger" onClick={() => CartService.remove(product)}>
                                            <Text id="cart-remove"/>
                                        </Button>
                                    </span>
                                </ListGroupItem>
                            )}
                            <ListGroupItem className="text-right"><span className="cart__sum"><Text id="cart-sum"/> {getSumOfProducts(cart)} {currency.symbol}</span></ListGroupItem>
                        </ListGroup>
                    </DropdownItem>
                    <DropdownItem tag="span">
                        <InertiaLink href="/checkout">
                            <Button block>
                                <Text id="cart-checkout"/>
                            </Button>
                        </InertiaLink>
                    </DropdownItem>
                </>
                    :
                <DropdownItem tag="span">
                    <Text id="cart-empty"/>
                </DropdownItem>
            }
        </DropdownMenu>
        </Dropdown>
    );
}

export default Cart;
