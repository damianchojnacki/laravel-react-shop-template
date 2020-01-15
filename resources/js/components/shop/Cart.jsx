import React, {useEffect, useState} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, InputGroupText
} from "shards-react";
import {CartContext} from "../../utils/CartContext";
import "./cart.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import ProductService from "../../utils/ProductService";
import {ListGroup, ListGroupItem, Button} from "shards-react";
import {notify} from "react-notify-toast";

function Cart(props) {
    const {state, dispatch} = React.useContext(CartContext);
    const [opened, setOpened] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function get() {
            const products = await ProductService.cart(state.cart);
            setProducts(products);
        }

        get();
    }, [state]);

    const removeFromCart = product => {
        dispatch({type: "remove", payload: product.id});

        notify.show(`${product.name} has been removed to cart.`, 'success', 1500);
    };

    const sum = products.length > 1 && products.reduce((previousValue, currentValue) => {
        return +previousValue.price * +previousValue.quantity + +currentValue.price * +currentValue.quantity;
    });

    return (
        <Dropdown dropup open={opened} className="cart" toggle={() => false}>
            <DropdownToggle className="cart__button" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon size="lg" icon={faShoppingCart}/>
            </DropdownToggle>
        <DropdownMenu right className={products.length ? null: "cart__empty"}>
            <h4 className="cart__header">Shopping cart</h4>
            {products.length ?
                <DropdownItem tag="span">
                    <ListGroup>
                        {products.map(product =>
                            <ListGroupItem key={product.id}>
                                <span className="cart__field">{product.name}</span>
                                <span className="cart__field">{product.price} USD</span>
                                <span className="cart__field">{product.quantity}</span>
                                <span className="cart__field">
                                    <Button size="sm" className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</Button>
                                </span>
                            </ListGroupItem>
                        )}
                        <ListGroupItem className="text-right"><span className="cart__sum">Sum: {sum ? sum : products[0].price * products[0].quantity} USD</span></ListGroupItem>
                    </ListGroup>
                </DropdownItem>
                    :
                <DropdownItem tag="span">Your shopping cart is empty.</DropdownItem>
            }
        </DropdownMenu>
        </Dropdown>
    );
}

export default Cart;
