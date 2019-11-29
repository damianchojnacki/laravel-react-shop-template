export default class ProductService{
    static async all() {
        const response = await window.axios.get('/api/products');

        return response.data;
    }

    static get(id) {
        return window.axios.get(`/api/products/${id}`);
    }
}

