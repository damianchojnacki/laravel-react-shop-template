import ProductService from "./ProductService";
import {Inertia} from "@inertiajs/inertia";

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

    static search(name) {
        return name ? Inertia.replace(`/admin/discounts/${name}`) : Inertia.replace(`/admin/discounts`);
    };

    static delete(id) {
        return Inertia.delete(`/admin/discounts/${id}`);
    };

    async create(data) {
        return window.axios.post(`/api/discounts`, data);
    };
}
