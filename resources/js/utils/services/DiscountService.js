import ProductService from "./ProductService";

export default class DiscountService {
    async all(){
        const products = await ProductService.all();

        return products.filter(product => {
            return product.price_origin != product.price_final;
        });
    };

    async without() {
        const products = await ProductService.all();

        return products.filter(product => {
            return product.price_origin == product.price_final;
        });
    };

    async delete(id) {
        return window.axios.delete(`/api/discounts/${id}`);
    };

    async create(data) {
        return window.axios.post(`/api/discounts`, data);
    };
}
