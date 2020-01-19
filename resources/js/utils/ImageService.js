export default class ImageService{
    static upload(data){
        const formData = new FormData();
        formData.append(
            'img',
            data,
        );

        return window.axios.post(`/api/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

