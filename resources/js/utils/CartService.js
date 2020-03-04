import {Inertia} from "@inertiajs/inertia";

export default class CartService {
    static add(id) {
        Inertia.put(`/cart/${id}`);
    };

    static remove(id) {
        Inertia.delete(`/cart/${id}`);
    };
}
