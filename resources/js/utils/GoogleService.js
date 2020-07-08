import {notify} from "react-notify-toast";
import LogRocket from 'logrocket';

export default class GoogleService {
    static async addressSearch(input, callback, cancelToken) {
        window.axios.get(`/api/google/places/${input}`, {
            cancelToken: cancelToken.token
        })
            .then(response => {
                const list = response.data.map((address) => {
                    return {
                        id: address.place_id,
                        value: address.description,
                        label: address.description
                    }
                });

                callback(list);
            })
            .catch(error => {
                if (!window.axios.isCancel(error)) {
                    LogRocket.captureException(error);

                    notify.show('Oops, problem with Dynamic Address Search, please enter your address manually.', 'error');

                    const list = [
                        {
                            id: 1,
                            value: input,
                            label: input
                        }
                    ];

                    callback(list);
                }
            });
    };
}
