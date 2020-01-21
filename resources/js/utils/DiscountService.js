import ProductService from "./ProductService";

export default class DiscountService {
    async all(){
        const products = await ProductService.all();

        return products.filter(product => {
            return product.discount;
        });
    };

    async without() {
        const products = await ProductService.all();

        return products.filter(product => {
            return !product.discount;
        });
    };

    async delete(id) {
        return window.axios.delete(`/api/discounts/${id}`);
    };

    async add(data) {
        return window.axios.post(`/api/discounts`, data);
    };
}
