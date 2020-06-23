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
    (error) => {
        if (error.response.status === 401) Cookies.remove('access_token');
        console.warn("Error - " + error.response.data.message);
        return Promise.reject(error);
    },
);
