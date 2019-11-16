import axios from 'axios';

class Api{
    static login(credentials) {
        return axios.post('/api/login', credentials)
            .then(res => {
                localStorage.setItem('access_token', res.data.token);
                axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            });
    }

    static getUser() {
        return axios.get('/api/user');
    }

    static logout() {
        const response = axios.post('/api/logout');

        localStorage.removeItem('access_token');

        return response;
    }
}

export default Api;

