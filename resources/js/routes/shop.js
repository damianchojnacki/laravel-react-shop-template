import Home from "../views/shop/Home";
import Login from "../views/shop/Login";
import Products from "../views/shop/Products";
import Register from "../views/shop/Register";

export default [
    {
        path: "/",
        name: "Home",
        component: Home,
        layout: "/shop"
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
        layout: "/shop"
    },
    {
        path: "/products/:category",
        component: Products,
        layout: "/shop",
        hidden: true,
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
];
