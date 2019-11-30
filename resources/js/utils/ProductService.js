export default class ProductService{
    static async all() {
        const response = await window.axios.get('/api/products');

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/products/${id}`);

        return response.data;
    }

    static edit(product){
        return window.axios.put(`/api/products`, product);
    }
}

