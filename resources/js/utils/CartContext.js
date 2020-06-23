import * as React from "react";

const CartContext = React.createContext();

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [],
    coupon: localStorage.getItem('coupon') ? JSON.parse(localStorage.getItem("coupon")) : {},
};

const reducer = (state, action) => {
    const cart = state.cart;

    switch (action.type) {
        case "reset":
            localStorage.removeItem('cart');

            return {...state, cart: [], coupon: {}};
        case "add":
            cart.push(action.payload);

            localStorage.setItem('cart', JSON.stringify(cart));

            return {...state, cart: cart};
        case "remove":
            const index = cart.indexOf(action.payload);
            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));

            return {...state, cart: cart};
        case "appendCoupon":
            localStorage.setItem('coupon', JSON.stringify(action.payload));

            return {...state, coupon: action.payload};
        case "removeCoupon":
            localStorage.removeItem('coupon');

            return {...state, coupon: {}};
    }
};

function CartContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    );
}

const CartContextConsumer = CartContext.Consumer;

export { CartContext, CartContextProvider, CartContextConsumer };
