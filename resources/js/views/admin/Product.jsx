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

function Product(props) {
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [redirect, setRedirect] = useState();

    useEffect(() => {
        async function get() {
            const product = await ProductService.get(props.match.params.id);
            setProduct(product);
            setName(product.name);
            setPrice(product.price);
        }

        get();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: product.id,
            name: name,
            price: price,
        };

        ProductService.edit(data)
            .then(res => {
                notify.show(res.data, 'success');
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    const handleDelete = () => {
        ProductService.delete(product.id)
            .then(res => {
                notify.show(res.data, 'success');
                setRedirect(<Redirect to="/admin/products"/>)
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
                                <h2 className="card-title">Product</h2>
                                {/*<h5 className="card-category">ID: {product.id}</h5>*/}
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <label>ID</label>
                                        <Input
                                            defaultValue={product.id}
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Name</label>
                                        <Input
                                            defaultValue={product.name}
                                            type="text"
                                            onChange={e => setName(e.target.value)}
                                            className={props.bgColor}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Price</label>
                                        <Input
                                            defaultValue={product.price}
                                            type="number"
                                            onChange={e => setPrice(e.target.value)}
                                            className={props.bgColor}
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color={props.bgColor} type="submit">
                                    Save
                                </Button>
                                <Button className="btn-fill" color="danger" type="button" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </CardFooter>
                        </Card>
                    </Form>
                </Col>
                <Col md="4" className="justify-content-center align-items-center" style={{display: "flex"}}>
                    {product.image && <img src={product.image.url} alt={product.name}/>}
                </Col>
            </Row>
        </div>
    );
}

export default Product;
