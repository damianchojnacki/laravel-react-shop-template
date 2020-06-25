import Homepage from "../views/shop/Homepage";
import Login from "../views/shop/Login";
import Products from "../views/shop/Products";
import Register from "../views/shop/Register";
import Checkout from "../views/shop/Checkout";

export default [
    {
        path: "/",
        name: "menu-homepage",
        component: Homepage,
        layout: "/shop"
    },
    {
        path: "/products/:category?",
        link: "/products",
        name: "menu-products",
        component: Products,
        layout: "/shop",
    },
    {
        path: "/login",
        name: "menu-login",
        component: Login,
        layout: "/shop"
    },
    {
        path: "/register",
        name: "menu-register",
        component: Register,
        layout: "/shop"
    },
    {
        path: "/checkout",
        component: Checkout,
        layout: "/shop",
        hidden: true
    },
    {
        path: "/:result?",
        component: Homepage,
        layout: "/shop",
        hidden: true
    },
];
