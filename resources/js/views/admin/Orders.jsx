import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Input
} from 'reactstrap';

import OrdersList from "../../components/OrdersList";
import OrderService from "../../utils/OrderService";

function Orders(props){

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        getOrders();
    }, [page]);

    const getOrders = async () => {
        const orders = await OrderService.all(page);

        setOrders(orders);
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Orders</title>
            </Helmet>
            <main className="content">
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Enter page number</ModalHeader>
                    <ModalBody>
                        <Input type="number" value={page} onChange={(e) => setPage(e.target.value)}/>
                    </ModalBody>
                </Modal>
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader>
                            <Breadcrumb tag="h2">
                                <BreadcrumbItem>All orders</BreadcrumbItem>
                                <BreadcrumbItem active>Page</BreadcrumbItem>
                                <BreadcrumbItem onClick={toggle}>
                                    {page}
                                    <span className="card-category"> Enter page</span>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </CardHeader>
                        <CardBody>
                            <div className="table-responsive ps">
                                <OrdersList orders={orders} bgColor={props.bgColor}/>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Button className="btn-block" onClick={() => setPage(page + 1)}>Show more</Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </>
    )
}

export default Orders;
