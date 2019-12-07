export default class ProductService{
    static async all(page) {
        const response = await window.axios.get(`/api/products/page/${page}`);

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/products/${id}`);

        return response.data;
    }

    static async search(name) {
        const response = await window.axios.get(`/api/products/search/${name}`);

        return response.data;
    }

    static edit(data){
        return window.axios.put(`/api/products`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/products/${id}`);
    }
}

