import DiscountService from './DiscountService';
import {Inertia} from "@inertiajs/inertia";

export default class ProductService{
    static all(page = '', category = '') {
        Inertia.replace(`/products/all/${page}/${category ? category : ''}`, {
            preserveScroll: true,
        });
    }

    static search(name, category = '') {
        name ? Inertia.replace(`/products/search/${name}/${category ? category : ''}`, {
            preserveScroll: true,
        }) : this.all(1, category);
    }

    static async get(id) {
        const response = await window.axios.get(`/api/products/${id}`);

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

    static discounts = new DiscountService;

    static admin = {
        all: async (page = '', category = '') => {
            return await axios.get(`/admin/products/all/${page}/${category ? category : ''}`)
        }
    };
};

