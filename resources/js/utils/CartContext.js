import * as React from "react";

const CartContext = React.createContext();

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [];

const reducer = (state, action) => {
    const cart = state;

    switch (action.type) {
        case "reset":
            localStorage.removeItem('cart');

            return [];
        case "add":
            cart.push(action.payload);

            localStorage.setItem('cart', JSON.stringify(cart));

            return cart;
        case "remove":
            const index = cart.indexOf(action.payload);
            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));

            return cart;
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
