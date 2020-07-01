import React from 'react';
import {CartContext} from "./CartContext";
import Cookies from "js-cookie";

export default class OrderService{
    static async all(page) {
        const response = await window.axios.get(`/api/orders/all/${page}`);

        return response.data;
    }

    static async recent() {
        const response = await window.axios.get('/api/orders/recent');

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/orders/${id}`);

        return response.data;
    }

    static async search(id) {
        const response = await window.axios.get(`/api/orders/search/${id}`);

        return response.data;
    }

    static create(data){
        return window.axios.post(`/api/orders`, data);
    }

    static edit(data){
        return window.axios.put(`/api/orders`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/orders/${id}`);
    }

    static make(data){
        return window.axios.post(`/api/order`, data);
    }

    static createPaypalOrder(actions, sum, currency){
        return actions.order.create({
            intent: "CAPTURE",
            application_context: {
                user_action: "PAY_NOW"
            },
            purchase_units: [{
                description: "Shop-template order",
                amount: {
                    currency_code: currency,
                    value: sum,
                    breakdown: {
                        item_total: {
                            currency_code: currency,
                            value: sum,
                        },
                    }
                },

            }]
        })
    }

    static getCountry(address){
        const country = address.substring(address.lastIndexOf(',') + 1).trim();

        switch(country){
            case "Poland":
                return "pl";
            case "Polska":
                return "pl";

            case "UK":
                return "uk";
            case "Wielka Brytania":
                return "uk";

            default:
                return null;
        }
    }

    static loadGeowidget(address, callback, setDisplay){
        const script = document.createElement("script");
        script.src = "https://geowidget.easypack24.net/js/sdk-for-javascript.js";
        document.body.appendChild(script);

        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = "https://geowidget.easypack24.net/css/easypack.css";
        document.head.appendChild(stylesheet);

        const country = this.getCountry(address);

        script.addEventListener("load", () => {
            window.easyPackAsyncInit = function () {

                easyPack.init({
                    defaultLocale: country,
                });

                const map = easyPack.mapWidget('geowidget', function (point) {
                    setDisplay("none");
                    callback(point.name + " " + point.address.line1 + ", " + point.address.line2);
                });
            };
        });
    }

    static appendCoupon(coupon){
        return window.axios.put(`api/coupon/${coupon}`);
    }

    static getSumOfProducts(products) {
        if(products && products.length) {
            let sum = 0;

            products.map(product => {
                sum += parseFloat(product.price_final) * product.quantity;
            });

            return sum.toFixed(2);
        }
    };

    static getSumOfProductsWithDiscount(products, coupon) {
        const sum = this.getSumOfProducts(products);

        return (sum - coupon.percent_off / 100 * sum).toFixed(2);
    }

    static fromCookie(){
        return Cookies.get("order") ? JSON.parse(Cookies.get("order")) : null;
    }

    static toCookie(order){
        order && Cookies.set("order", JSON.stringify(order), {expires: 1})
    }

    static clearCookie(){
        Cookies.remove("order");
    }
}

