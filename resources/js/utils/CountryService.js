export default class CountryService {
    static async all() {
        const countries = await window.axios.get("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code");

        return countries.data.map((country, index) => {
            country.id = index;
            country.iso = country.alpha2Code;

            return country;
        });
    };
}
