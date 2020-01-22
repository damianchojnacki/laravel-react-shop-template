import DiscountService from './DiscountService';

export default class ProductService{
    static async all(page = null, category = null) {
        const query = page ? category ? `/api/products/all/${page}/${category}` : `/api/products/all/${page}` : `/api/products/all`;

        const response = await window.axios.get(query);

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/products/${id}`);

        return response.data;
    }

    static async search(name, category = null) {
        const query = category ? `/api/products/search/${name}/${category}` : `/api/products/search/${name}`;

        const response = await window.axios.get(query);

        return response.data;
    }

    static async types() {
        const response = await window.axios.get(`/api/product-types`);

        return response.data;
    }

    static add(data){
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

