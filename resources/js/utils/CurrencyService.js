import {Inertia} from "@inertiajs/inertia";

export default class CurrencyService{
    static update(value){
        return Inertia.put(`/api/currency-change/${value}`);
    }
}
