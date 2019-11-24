import axios from 'axios';

export default class ProductService{
    static all() {
        return axios.get('/api/products');
    }

    static get(id) {
        return axios.get(`/api/products/${id}`);
    }
}

