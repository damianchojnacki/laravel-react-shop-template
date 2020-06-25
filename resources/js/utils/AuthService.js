import Cookies from 'js-cookie';

class AuthService{
    static login(credentials) {
        return window.axios.post('/api/login', credentials)
            .then(res => {
                Cookies.set('access_token', res.data.token, {expires: 7});
                window.axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            });
    }

    static async googleInit(callback){
        const googleClientId = await window.axios.get('/api/google-client-id');

        const script = document.createElement("script");
        script.src = `https://apis.google.com/js/platform.js?onload=init`;
        script.addEventListener("load", () => callback(googleClientId.data));
        document.body.appendChild(script);
    }

    static loginWithGoogle(user) {
        return window.axios.post('/api/login/google', {user_id: user.getAuthResponse().id_token})
            .then(res => {
                Cookies.set('access_token', res.data.token, {expires: 7});
                window.axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            });
    }

    static register(credentials) {
        credentials.password_confirmation = credentials.passwordConfirmation;
        credentials.passwordConfirmation = null;

        return window.axios.post('/api/register', credentials)
            .then(res => {
                Cookies.set('access_token', res.data.token, {expires: 7});
                window.axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
            });
    }

    static getUser() {
        return window.axios.get('/api/user');
    }

    static logout() {
        const response = window.axios.post('/api/logout');

        Cookies.remove('access_token');

        return response;
    }
}

export default AuthService;

