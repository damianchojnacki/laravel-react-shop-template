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
import {notify} from 'react-notify-toast';
import OrderService from "../../utils/OrderService";
import ProductsListComplex from "../../components/ProductsListComplex";

function Order(props) {
    const [order, setOrder] = useState({});
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState();
    const [statuses, setStatuses] = useState([]);
    const [redirect, setRedirect] = useState();

    const getOrders = async () => {
        const order = await OrderService.get(props.match.params.id);

        setProducts(order.products);
        setStatus(order.status.id);
        setOrder(order);
    };

    const getOrdersStatuses = async () => {
        const statuses = await window.axios.get('/api/orders/statuses');

        const options =  statuses.data.map((status) => {
            return <option key={status.id} value={status.id}>{status.name}</option>
        });

        setStatuses(options);
    };

    useEffect(() => {
        getOrders();
        getOrdersStatuses();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: order.id,
            status: status,
            products: products,
        };

        OrderService.edit(data)
            .then(res => {
                notify.show(res.data, 'success');
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    const handleDelete = () => {
        OrderService.delete(order.id)
            .then(res => {
                notify.show(res.data, 'success');
                setRedirect(<Redirect to="/admin/orders"/>)
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
                                <h2 className="card-title">Order</h2>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <label>ID</label>
                                        <Input
                                            defaultValue={order.id}
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Customer</label>
                                        <Input
                                            defaultValue={order.user && order.user.email}
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Data zakupu</label>
                                        <Input
                                            defaultValue={order.created_at}
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Value</label>
                                        <Input
                                            defaultValue={order.value}
                                            type="number"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Status</label>
                                        <Input
                                            type="select"
                                            value={status}
                                            onChange={e => setStatus(e.target.value)}
                                            className={props.bgColor}
                                        >
                                            {statuses}
                                        </Input>
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
                <Col md="4">
                    <h2>Products:</h2>
                    <ProductsListComplex data={products} bgColor={props.bgColor}/>
                </Col>
            </Row>
        </div>
    );
}

export default Order;
