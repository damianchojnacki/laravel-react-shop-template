import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody, Button, Row, Col, Input, CardFooter, Form,
} from 'reactstrap';

import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import DiscountsList from "../../components/admin/DiscountsList";
import ProductsList from "../../components/admin/ProductsList";

function DiscountsNew(props){
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [percentOff, setPercentOff] = useState('');
    const [ends, setEnds] = useState('');

    useEffect(() => {
        getProducts();

    }, []);

    const getProducts = async () => {
        const products = await ProductService.discounts.without();

        setProducts(products);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            product_id: id,
            percent_off: percentOff,
            ends: ends,
        };

        ProductService.discounts.add(data)
            .then(res => {
                notify.show(res.data, 'success');

                getProducts();
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - New Discount</title>
            </Helmet>
            <main className="content">
                <Row>
                <div className="col-lg-6 col-12">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">New discount</h2>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <label>Percent off</label>
                                        <Input
                                            type="number"
                                            onChange={e => setPercentOff(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Ends at</label>
                                        <Input
                                            type="datetime-local"
                                            onChange={e => setEnds(e.target.value)}
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
                </div>
                <div className="col-lg-6 col-12">
                    <h2 className="">Products:</h2>
                    <ProductsList
                        data={products}
                        bgColor={props.bgColor}
                        fields={{
                            name: true,
                            price: true,
                        }}
                        add={product => setId(product.id)}
                        product={id}
                    />
                </div>
                </Row>
            </main>
        </>
    )
}

export default DiscountsNew;
