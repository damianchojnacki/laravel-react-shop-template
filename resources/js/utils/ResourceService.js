import DiscountService from './DiscountService';
import {Inertia} from "@inertiajs/inertia";

export default class ResourceService{
    static all = name => name && Inertia.replace(`/admin/${name}`);

    static search = (name, search) => search ? Inertia.replace(`/admin/${name}/search/${search}`) : this.all(name);
};

