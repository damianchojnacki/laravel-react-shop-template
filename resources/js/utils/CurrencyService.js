import Cookies from 'js-cookie';

export default class CurrencyService{
    static async all(){
        const currencies = await window.axios.get("/api/currencies");

        return currencies.data;
    }

    static change(value){
        Cookies.set('currency', JSON.stringify(value));
    }

    static reset(){
        Cookies.remove('currency');
    }

    static get(){
        return Cookies.get('currency') ? JSON.parse(Cookies.get('currency')) : this.default();
    }

    static default(){
        return {iso: "USD", symbol: "$"};
    }
}
