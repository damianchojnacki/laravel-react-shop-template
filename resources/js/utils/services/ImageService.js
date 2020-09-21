export default class ImageService{
    static upload(data){
        const formData = new FormData();
        formData.append(
            'img',
            data.img,
        );

        if(data.product_id){
            formData.append(
                'product_id',
                data.product_id,
            );
        }

        return window.axios.post(`/api/images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

