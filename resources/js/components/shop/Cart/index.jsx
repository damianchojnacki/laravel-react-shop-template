import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, InputGroupText
} from "shards-react";
import {CartContext} from "../../../utils/CartContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import ProductService from "../../../utils/ProductService";
import {ListGroup, ListGroupItem, Button} from "shards-react";
import {notify} from "react-notify-toast";

import "./style.scss";
import {CurrencyContext} from "../../../utils/CurrencyContext";

function Cart(props) {
    const {state, dispatch} = React.useContext(CartContext);
    const currency = React.useContext(CurrencyContext).state.currency;

    const [opened, setOpened] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            const products = await ProductService.cart(state.cart);

            setProducts(products);
        }());
    }, [state, currency]);

    const removeFromCart = product => {
        dispatch({type: "remove", payload: product.id});

        notify.show(`${product.name} has been removed from cart.`, 'success', 1500);
    };

    const getSumOfProducts = () => {
        if(products && products.length) {
            let sum = 0;

            products.map(product => {
                sum += parseFloat(product.price_final) * product.quantity;
            });

            return sum.toFixed(2);
        }
    };

    return (
        <Dropdown dropup open={opened} className="cart" toggle={() => false}>
            <DropdownToggle className="cart__button" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon size="lg" icon={faShoppingCart}/>
            </DropdownToggle>
        <DropdownMenu right className={products && products.length ? null: "cart__empty"}>
            <h4 className="cart__header">Shopping cart</h4>
            {products && products.length ?
                <>
                    <DropdownItem tag="span" className="cart__products">
                        <ListGroup>
                            {products.map(product =>
                                <ListGroupItem key={product.id}>
                                    <span className="cart__field">{product.name}</span>
                                    <span className="cart__field">{product.price_final} {currency.symbol}</span>
                                    <span className="cart__field">{product.quantity}</span>
                                    <span className="cart__field">
                                        <Button size="sm" className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</Button>
                                    </span>
                                </ListGroupItem>
                            )}
                            <ListGroupItem className="text-right"><span className="cart__sum">Sum: {getSumOfProducts()} {currency.symbol}</span></ListGroupItem>
                        </ListGroup>
                    </DropdownItem>
                    <DropdownItem tag="span">
                        <Link to="/checkout">
                            <Button block>Checkout</Button>
                        </Link>
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
