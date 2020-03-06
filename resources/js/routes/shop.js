import Home from "../views/shop/Home";
import Login from "../views/shop/Login";
import Products from "../views/shop/Products";
import Register from "../views/shop/Register";
import Checkout from "../views/shop/Checkout";

export default [
    {
        path: "/",
        name: "Homepage",
        component: Home,
        layout: "/shop"
    },
    {
        path: "/products/all/:category?",
        link: "/products/all",
        name: "Products",
        component: Products,
        layout: "/shop",
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/shop"
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/shop"
    },
    {
        path: "/register/:result",
        component: Home,
        layout: "/shop",
        hidden: true
    },
    {
        path: "/checkout",
        component: Checkout,
        layout: "/shop",
        hidden: true
    },
];
