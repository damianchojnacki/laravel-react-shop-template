import {Inertia} from "@inertiajs/inertia";

export default class OrderService{
    static make(data){
        return Inertia.post('/order', data, {
            preserveScroll: true,
        });
    }

    static clear(){
        return Inertia.delete('/order', {}, {
            preserveScroll: true,
            preserveState: true,
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
}

