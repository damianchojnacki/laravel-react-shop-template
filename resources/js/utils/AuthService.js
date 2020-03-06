class AuthService{
    static login(credentials) {
        return window.axios.post('/login', credentials);
    }

    static register(credentials) {
        credentials.password_confirmation = credentials.passwordConfirmation;

        return window.axios.post('/register', credentials);
    }

    static getUser() {
        return window.axios.get('/user');
    }
}

export default AuthService;

