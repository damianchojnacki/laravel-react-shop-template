class AuthService{
    static login(credentials) {
        return window.axios.post('/api/login', credentials)
            .then(res => {
                localStorage.setItem('access_token', res.data.token);
                window.axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            });
    }

    static getUser() {
        return window.axios.get('/api/user');
    }

    static logout() {
        const response = window.axios.post('/api/logout');

        localStorage.removeItem('access_token');

        return response;
    }
}

export default AuthService;

