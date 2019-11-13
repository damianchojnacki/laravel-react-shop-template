import axios from 'axios';

export async function login(credentials) {
    return axios.post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('access_token', res.data.token);
            axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        });
}

export async function getUser() {
    return axios.get('/api/user');
}

export function logout() {
    localStorage.removeItem('access_token');
}

export function isAuthenticated() {
    return !!localStorage.getItem('access_token');
}