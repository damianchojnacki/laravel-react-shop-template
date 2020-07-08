/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

import Cookies from 'js-cookie';

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const token = Cookies.get('access_token');
window.axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;

window.axios.interceptors.response.use(
    response => response,
    error => {
        if(error.response) {
            if (error.response.status === 401) Cookies.remove('access_token');

            if (error.response.data) {
                if(error.response.data.message)
                    console.warn(error.response.data.message);
                else
                    console.warn(error.response.data);
            }
        }
            return Promise.reject(error);
    },
);
