import axios from 'axios';

function handleError(error) {
    console.warn(error);
}

export async function login(credentials) {
  return axios.post('/api/login', credentials);
}

export async function getUser() {
    return axios.get('/api/user');
}