export default class OrderService{
    static async all(page) {
        const response = await window.axios.get(`/api/orders/all/${page}`);

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

    static create(data){
        return window.axios.post(`/api/orders`, data);
    }

    static edit(data){
        return window.axios.put(`/api/orders`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/orders/${id}`);
    }

    static make(data){
        return window.axios.post(`/api/order`, data);
    }

    static appendCoupon(coupon){
        return window.axios.put(`api/coupon/${coupon}`);
    }

    static getSumOfProducts(products) {
        if(products && products.length) {
            let sum = 0;

            products.map(product => {
                sum += parseFloat(product.price_final) * product.quantity;
            });

            return sum.toFixed(2);
        }
    };

    static getSumOfProductsWithDiscount(products, coupon) {
        const sum = this.getSumOfProducts(products);

        return (sum - coupon.percent_off / 100 * sum).toFixed(2);
    }
}

