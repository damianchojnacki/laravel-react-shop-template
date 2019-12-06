export default class OrderService{
    static async all(page) {
        const response = await window.axios.get(`/api/orders/page/${page}`);

        return response.data;
    }

    static async recent() {
        const response = await window.axios.get('/api/orders/recent');

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/orders/${id}`);

        return response.data;
    }

    static async search(id) {
        const response = await window.axios.get(`/api/orders/search/${id}`);

        return response.data;
    }

    static edit(data){
        return window.axios.put(`/api/orders`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/orders/${id}`);
    }
}

