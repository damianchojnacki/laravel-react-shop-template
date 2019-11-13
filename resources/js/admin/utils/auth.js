import axios from 'axios';

export async function getUser() {
    return axios.get('/api/user');
}

export function logout() {
    localStorage.removeItem('access_token');
}

export function isAuthenticated() {
    return !!localStorage.getItem('access_token');
}