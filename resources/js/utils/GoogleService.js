import {notify} from "react-notify-toast/bin/notify";

export default class GoogleService {
    static async addressSearch(input, callback) {
        window.axios.get(`/api/google-places/${input}`)
            .then(response => {
                const list = response.data.map((address) => {
                    return {
                        id: address.id,
                        value: address.description,
                        label: address.description
                    }
                });

                callback(list);
            })
            .catch(error => {
                console.error(error.response.data);

                notify.show('Oops, problem with Dynamic Address Search, please enter your address manually.', 'error');

                const list = [
                    {
                        id: 1,
                        value: input,
                        label: input
                    }
                ];

                callback(list);
            });
    };
}
