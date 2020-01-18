export default class ProductService{
    static async all(page = null, category = null) {
        const query = page ? category ? `/api/products/page/${page}/${category}` : `/api/products/page/${page}` : `/api/products/all`;

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

    static async cart(cart) {
        const param = JSON.stringify(cart);

        const response = await window.axios.get(`/api/products/cart/${param}`);

        return response.data;
    }

    static discounts = {
        all: async () => {
            const response = await window.axios.get('/api/products/discounts');

            return response.data;
        },
        without: async () => {
            const response = await window.axios.get('/api/products/discounts/without');

            return response.data;
        },
        delete: async id => {
            return window.axios.delete(`/api/products/discounts/${id}`);
        },
        add: async data => {
            return window.axios.post(`/api/products/discounts`, data);
        }
    };
}

