import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";
import Notifications, {notify} from 'react-notify-toast';
import ProductService from "../../utils/ProductService";
import ImageService from "../../utils/ImageService";

function ProductNew(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState({});
    const [redirect, setRedirect] = useState();

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: name,
            price: price,
            img: image.id,
        };

        ProductService.add(data)
            .then(res => {
                notify.show(`${name} has been added.`, 'success');
                setRedirect(<Redirect to={`/admin/products/${res.data.id}`}/>)
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    const uploadImage = image => {
        ImageService.upload(image)
            .then(res => {
                setImage(res.data.src);
                notify.show(`Image has been uploaded.`, 'success');
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    return (
        <div className="content">
            {redirect}
            <Row>
                <Col md="8">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">New product</h2>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <label>Name</label>
                                        <Input
                                            type="text"
                                            onChange={e => setName(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Price</label>
                                        <Input
                                            type="number"
                                            onChange={e => setPrice(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="success" type="submit">
                                    Add
                                </Button>
                            </CardFooter>
                        </Card>
                    </Form>
                </Col>
                <Col md="4" className="justify-content-center align-items-center" style={{display: "flex"}}>
                    {image.src ?
                        <img src={image.src} alt={name}/> :
                        <Input type="file" onChange={e => uploadImage(e.target.files[0])}/>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default ProductNew;
