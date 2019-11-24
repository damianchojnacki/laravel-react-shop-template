
export default class ProductService{
    static all() {
        return window.axios.get('/api/products');
    }

    static get(id) {
        return window.axios.get(`/api/products/${id}`);
    }
}

