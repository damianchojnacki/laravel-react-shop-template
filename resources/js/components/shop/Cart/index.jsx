import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "shards-react";
import {useCart} from "../../../utils/CartContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import ProductService from "../../../utils/ProductService";
import {ListGroup, ListGroupItem, Button} from "shards-react";
import OrderService from "../../../utils/OrderService";
import "./style.scss";
import {useCurrency} from "../../../utils/CurrencyContext";
import Text from "../../Text";

function Cart() {
    const cart = useCart();
    const currency = useCurrency();

    const [opened, setOpened] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            const products = await ProductService.cart(cart.state.products);

            setProducts(products);

            //products.length <= 0 && OrderService.clearCookie();
        }());
    }, [cart.state, currency.state]);

    const removeFromCart = product => {
        cart.dispatch({type: "remove", payload: product.id});
    };

    const clearCart = () => {
        cart.dispatch({type: "reset"});
    };

    return (
        <Dropdown dropup open={opened} className="cart" toggle={() => false}>
            <DropdownToggle className="cart__button" onClick={() => setOpened(!opened)}>
                <FontAwesomeIcon size="lg" icon={faShoppingCart}/>
            </DropdownToggle>
        <DropdownMenu right className={products && products.length ? null: "cart__empty"}>
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="cart__header">
                    <Text id="cart-header"/>
                </h4>
                {products && products.length > 0 &&
                    <div className="pr-4">
                        <Button size="sm" className="btn btn-secondary" onClick={() => clearCart()}>
                            <Text id="cart-clear"/>
                        </Button>
                    </div>
                }
            </div>
            {products && products.length ?
                <>
                    <DropdownItem tag="span" className="cart__products">
                        <ListGroup>
                            {products.map(product =>
                                <ListGroupItem key={product.id}>
                                    <span className="cart__field">{product.name}</span>
                                    <span className="cart__field">{product.price_final} {currency.state.symbol}</span>
                                    <span className="cart__field">{product.quantity}</span>
                                    <span className="cart__field">
                                        <Button size="sm" className="btn btn-danger" onClick={() => removeFromCart(product)}>
                                            <Text id="cart-remove"/>
                                        </Button>
                                    </span>
                                </ListGroupItem>
                            )}
                            <ListGroupItem className="text-right">
                                <span className="cart__sum">
                                    <Text id="cart-sum"/> {OrderService.getSumOfProducts(products)} {currency.state.symbol}
                                </span>
                            </ListGroupItem>
                        </ListGroup>
                    </DropdownItem>
                    <DropdownItem tag="span">
                        <Link to="/checkout">
                            <Button block>
                                <Text id="cart-checkout"/>
                            </Button>
                        </Link>
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
