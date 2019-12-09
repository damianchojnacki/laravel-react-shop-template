/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/admin/Dashboard";
import Icons from "./views/admin/Icons";
import Notifications from "./views/admin/Notifications";
import TableList from "./views/admin/TableList";
import Typography from "./views/admin/Typography";
import UserProfile from "./views/admin/UserProfile";
import Home from "./views/shop/Home";
import Login from "./views/shop/Login";
import ShopProducts from "./views/shop/Products";
import Product from "./views/admin/Product";
import Order from "./views/admin/Order";
import Resource from "./views/admin/Resource";
import User from "./views/admin/User";
import Analytics from "./views/admin/Analytics";

var routes = [
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
        path: "/dashboard",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/products",
        name: "Products",
        icon: "tim-icons icon-laptop",
        component: Resource,
        layout: "/admin",
    },
    {
        path: `/products/:id`,
        component: Product,
        layout: "/admin",
        hidden: true
    },
    {
        path: "/orders",
        name: "Orders",
        icon: "tim-icons icon-basket-simple",
        component: Resource,
        layout: "/admin",
    },
    {
        path: `/orders/:id`,
        component: Order,
        layout: "/admin",
        hidden: true
    },
    {
        path: "/users",
        name: "Users",
        icon: "tim-icons icon-single-02",
        component: Resource,
        layout: "/admin",
    },
    {
        path: `/users/:id`,
        component: User,
        layout: "/admin",
        hidden: true
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: "tim-icons icon-chart-bar-32",
        component: Analytics,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "tim-icons icon-atom",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "tim-icons icon-bell-55",
        component: Notifications,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "tim-icons icon-single-02",
        component: UserProfile,
        layout: "/admin"
    },
    {
        path: "/tables",
        name: "Table List",
        icon: "tim-icons icon-puzzle-10",
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "tim-icons icon-align-center",
        component: Typography,
        layout: "/admin"
    }
];
export default routes;
