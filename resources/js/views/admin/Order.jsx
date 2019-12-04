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
import OrderService from "../../utils/OrderService";

function Order(props) {
    const [order, setOrder] = useState({});
    const [value, setValue] = useState(0);
    const [statuses, setStatuses] = useState([]);
    const [redirect, setRedirect] = useState();

    const getOrders = async () => {
        const order = await OrderService.get(props.match.params.id);
        setOrder(order);
        setValue(order.price);
    };

    const getOrdersStatuses = async () => {
        const statuses = await window.axios.get('/api/orders/statuses');

        setStatuses(statuses.data);
    };

    useEffect(() => {
        getOrders();
        getOrdersStatuses();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: order.id,
            value: value,
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
                <Col md="6">
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
                                            onChange={e => setValue(e.target.value)}
                                            className={props.bgColor}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Status</label>
                                        <Input
                                            type="select"
                                            value={order.status && order.status.id}
                                            onChange={e => setValue(e.target.value)}
                                            className={props.bgColor}
                                        >
                                            {statuses && statuses.map((status) => {
                                                return <option key={status.id} value={status.id}>{status.name}</option>
                                            })}
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
                <Col md="6">
                </Col>
            </Row>
        </div>
    );
}

export default Order;
