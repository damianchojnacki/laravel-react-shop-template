export default class UserService{
    static async all(page) {
        const response = await window.axios.get(`/api/users/page/${page}`);

        return response.data;
    }

    static async get(id) {
        const response = await window.axios.get(`/api/users/${id}`);

        return response.data;
    }

    static async search(email) {
        const response = await window.axios.get(`/api/users/search/${email}`);

        return response.data;
    }

    static edit(data){
        return window.axios.put(`/api/users`, data);
    }

    static delete(id){
        return window.axios.delete(`/api/users/${id}`);
    }
}

