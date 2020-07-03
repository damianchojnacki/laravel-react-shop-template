import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Row,} from 'reactstrap';

import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import ProductsList from "../../components/admin/ProductsList";

function DiscountsNew(props){
    const [products, setProducts] = useState([]);
    const [discounted, setDiscounted] = useState([]);
    const [percentOff, setPercentOff] = useState('');
    const [ends, setEnds] = useState('');
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const products = await ProductService.discounts.without();

        setProducts(products);
    };

    const removeProduct = product => {
        const id = product.id;

        const newProducts = discounted.filter(product => {
            return product.id !== id;
        });

        setDiscounted(newProducts);
    };

    const addProduct = product => {
        setDiscounted([...discounted, product]);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            products: discounted,
            percent_off: percentOff,
            ends: ends,
        };

        ProductService.discounts.create(data)
            .then(res => {
                setRedirect(<Redirect to="/admin/discounts"/>);
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    return (
        <>
            {redirect}
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
                        products={discounted}
                        add={addProduct}
                        remove={removeProduct}
                    />
                </div>
                </Row>
            </main>
        </>
    )
}

export default DiscountsNew;
