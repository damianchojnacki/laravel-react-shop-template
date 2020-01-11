import Home from "../views/shop/Home";
import Login from "../views/shop/Login";
import ShopProducts from "../views/shop/Products";
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
        component: ShopProducts,
        layout: "/shop"
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
];
