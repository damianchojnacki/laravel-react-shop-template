/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

import cookie from 'react-cookies'

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const token = cookie.load('access_token');
token ? window.axios.defaults.headers.common.Authorization = `Bearer ${token}` : null;

window.axios.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response.status === 401) cookie.remove('access_token');
        console.warn("Error - " + error.response.data.message);
        return Promise.reject(error);
    },
);
