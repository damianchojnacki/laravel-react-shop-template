import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, InputGroupText
} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {ListGroup, ListGroupItem, Button} from "shards-react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

import "./style.scss";
import CartService from "../../../utils/CartService";

function Cart(props) {
    const {cart} = usePage();
    const [opened, setOpened] = useState(false);

    function getSumOfProducts(){
        if(cart && cart.length) {
            let sum = 0;

            cart.map(product => {
                sum += parseFloat(product.price_final) * product.quantity;
            });

            return sum.toFixed(2);
        }
    }

    return (
        <Dropdown dropup open={opened} className="cart" toggle={opened}>
            <DropdownToggle className="cart__button" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon size="lg" icon={faShoppingCart}/>
            </DropdownToggle>
        <DropdownMenu right className={cart && cart.length ? null: "cart__empty"}>
            <h4 className="cart__header">Shopping cart</h4>
            {cart && cart.length ?
                <>
                    <DropdownItem tag="span" className="cart__products">
                        <ListGroup>
                            {cart.map(product =>
                                <ListGroupItem key={product.id}>
                                    <span className="cart__field">{product.name}</span>
                                    <span className="cart__field">{product.price_final} $</span>
                                    <span className="cart__field">{product.quantity}</span>
                                    <span className="cart__field">
                                        <Button size="sm" className="btn btn-danger" onClick={() => CartService.remove(product.id)}>Remove</Button>
                                    </span>
                                </ListGroupItem>
                            )}
                            <ListGroupItem className="text-right"><span className="cart__sum">Sum: {getSumOfProducts()} $</span></ListGroupItem>
                        </ListGroup>
                    </DropdownItem>
                    <DropdownItem tag="span">
                        <InertiaLink href="/checkout">
                            <Button block>Checkout</Button>
                        </InertiaLink>
                    </DropdownItem>
                </>
                    :
                <DropdownItem tag="span">Your shopping cart is empty.</DropdownItem>
            }
        </DropdownMenu>
        </Dropdown>
    );
}

export default Cart;
