import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from 'reactstrap';

import OrdersList from "../../components/OrdersList";
import OrderService from "../../utils/OrderService";

function Orders(props){

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getOrders();
    }, [page]);

    const getOrders = async () => {
        const newOrders = await OrderService.all(page);

        setOrders(orders.concat(newOrders));
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Orders</title>
            </Helmet>
            <main className="content">
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader tag="h2">
                            All orders
                        </CardHeader>
                        <CardBody>
                            <OrdersList
                                orders={orders}
                                bgColor={props.bgColor}
                                fields={{
                                    id: false,
                                    index: true,
                                    date: true,
                                    email: true,
                                    value: true,
                                    status: true,
                                }}
                            />
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
