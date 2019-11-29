export default class OrderService{
    static async all() {
        const response = await window.axios.get('/api/orders');

        return response.data;
    }

    static async recent() {
        const response = await window.axios.get('/api/orders/recent');

        return response.data;
    }
}

