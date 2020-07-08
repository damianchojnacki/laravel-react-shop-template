import Homepage from "../views/shop/Homepage";
import Login from "../views/shop/Login";
import Products from "../views/shop/Products";
import Register from "../views/shop/Register";
import Checkout from "../views/shop/Checkout";
import User from "../views/shop/User";
import NotFound from "../views/shop/404";
import Orders from "../views/shop/User/Orders";

export default [
    {
        path: "/",
        name: "menu-homepage",
        component: Homepage,
        layout: "/shop"
    },
    {
        path: "/homepage/:status",
        component: Homepage,
        layout: "/shop",
        hidden: true
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
        path: "/user",
        component: User,
        layout: "/shop",
        hidden: true
    },
    {
        path: "/user/orders",
        component: Orders,
        layout: "/shop",
        hidden: true
    },
    {
        path: "/:404",
        component: NotFound,
        layout: "/shop",
        hidden: true
    },
];
