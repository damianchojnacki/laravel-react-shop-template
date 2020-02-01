import DiscountService from './DiscountService';

export default class ProductService{
    static async all(page = '', category = '') {
        const response = await window.axios.get(`/api/products/all/${page}/${category}`);

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/products/${id}`);

        return response.data;
    }

    static async search(name, category = 'null') {
        const response = await window.axios.get(`/api/products/search/${name}/${category}`);

        return response.data;
    }

    static async types() {
        const response = await window.axios.get(`/api/product-types`);

        return response.data;
    }

    static create(data){
        return window.axios.post(`/api/products`, data);
    }

    static edit(data){
        return window.axios.put(`/api/products`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/products/${id}`);
    }

    static async cart(cart) {
        const param = JSON.stringify(cart);

        const response = await window.axios.get(`/api/products/cart/${param}`);

        return response.data;
    }

    static discounts = new DiscountService;
}

