import * as React from "react";

const CartContext = React.createContext();

const useCart = () => React.useContext(CartContext);

const initialState = {
    products: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [],
    coupon: localStorage.getItem('coupon') ? JSON.parse(localStorage.getItem("coupon")) : {},
    payment: false,
};

const reducer = (state, action) => {
    const products = state.products;

    switch (action.type) {
        case "reset":
            localStorage.removeItem('cart');

            return {...state, products: [], coupon: {}, payment: false};
        case "add":
            products.push(action.payload);

            localStorage.setItem('cart', JSON.stringify(products));

            return {...state, products: products};
        case "remove":
            const index = products.indexOf(action.payload);
            products.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(products));

            return {...state, products: products};
        case "appendCoupon":
            localStorage.setItem('coupon', JSON.stringify(action.payload));

            return {...state, coupon: action.payload};
        case "removeCoupon":
            localStorage.removeItem('coupon');

            return {...state, coupon: {}};
        case "beginPayment":
            return {...state, payment: true};
        case "endPayment":
            return {...state, payment: false};
    }
};

function CartContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    );
}

export { CartContextProvider, useCart };
