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
import Dashboard from "../views/admin/Dashboard";
import Product from "../views/admin/Product";
import Order from "../views/admin/Order";
import Resource from "../views/admin/Resource";
import User from "../views/admin/User";
import Analytics from "../views/admin/Analytics";
import Discounts from "../views/admin/Discounts";
import DiscountsNew from "../views/admin/DiscountsNew";

export default [
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
        path: "/discounts",
        name: "Discounts",
        icon: "tim-icons icon-money-coins",
        component: Discounts,
        layout: "/admin"
    },
    {
        path: "/discounts/new",
        component: DiscountsNew,
        layout: "/admin",
        hidden: true
    },
];
