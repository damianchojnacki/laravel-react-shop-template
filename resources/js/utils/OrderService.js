import {Inertia} from "@inertiajs/inertia";

export default class OrderService{
    static make(data){
        return Inertia.post('/order', data, {
            preserveScroll: true,
        });
    }

    static clear(){
        return Inertia.visit('/order/clear', {
            method: "DELETE",
        });
    }

    static appendCoupon(coupon){
        return coupon && Inertia.put(`/coupon/${coupon}`,{}, {
            preserveScroll: true,
        });
    }

    static removeCoupon(){
        return Inertia.delete(`/coupon`, {}, {
            preserveScroll: true,
        });
    }

    static async all(page) {
        const response = await window.axios.get(`/admin/orders/all/${page}`);

        return response.data;
    }

    static async recent() {
        const response = await window.axios.get('/admin/orders/recent');

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/admin/orders/${id}`);

        return response.data;
    }

    static async search(id) {
        const response = await window.axios.get(`/admin/orders/search/${id}`);

        return response.data;
    }

    static create(data){
        return window.axios.post(`/admin/orders`, data);
    }

    static edit(data){
        return window.axios.put(`/admin/orders`, data);
    }

    static delete(id){
        return window.axios.delete(`/admin/orders/${id}`);
    }
}

