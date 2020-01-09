import cookie from 'react-cookies';

class AuthService{
    static login(credentials) {
        return window.axios.post('/api/login', credentials)
            .then(res => {
                cookie.save('access_token', res.data.token, {maxAge: 3600});
                window.axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            });
    }

    static getUser() {
        return window.axios.get('/api/user');
    }

    static logout() {
        const response = window.axios.post('/api/logout');

        cookie.remove('access_token');

        return response;
    }
}

export default AuthService;

