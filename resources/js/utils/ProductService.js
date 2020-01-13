export default class ProductService{
    static async all(page, category = null) {
        const query = category ? `/api/products/page/${page}/${category}` : `/api/products/page/${page}`;

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

    static edit(data){
        return window.axios.put(`/api/products`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/products/${id}`);
    }
}

