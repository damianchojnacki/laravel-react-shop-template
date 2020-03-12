import {Inertia} from "@inertiajs/inertia";

class AuthService{
    static login(credentials) {
        return window.axios.post('/login', credentials);
    }

    static loginWithGoogle(user) {
        return Inertia.post('/login/google', {user_id: user.getAuthResponse().id_token});
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

