import {Inertia} from "@inertiajs/inertia";

export default class CartService {
    static in(cart, product) {
        let contains = false;

        cart.map(cartProduct => {
            if(cartProduct.id === product.id) contains = true;
        });

        return contains;
    };

    static add(product) {
        return Inertia.put(`/cart/${product.id}`, {}, {
            preserveScroll: true,
        });
    };

    static remove(product) {
        return Inertia.delete(`/cart/${product.id}`, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    static empty() {
        return Inertia.delete(`/cart`, {
            preserveScroll: true,
            preserveState: true,
        });
    };
}
