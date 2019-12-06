import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
} from 'reactstrap';

import OrdersList from "../../components/OrdersList";
import OrderService from "../../utils/OrderService";

function Orders(props){

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [searchId, setSearchId] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getOrders();
    }, [page, searchId]);

    const toggle = () => setModal(!modal);

    const getOrders = async () => {
        if(searchId && searchId !== ""){
            const foundOrders = await OrderService.search(searchId);

            setOrders(foundOrders);
        } else if(searchId === ""){
            setOrders([]);
            setPage(1);
            setSearchId(null);
        } else{
            const newOrders = await OrderService.all(page);

            setOrders(orders.concat(newOrders));
        }
    };

    const showMoreOrReload = () => {
        if(searchId){
            setSearchId(null);
            setOrders([]);
            setPage(1);
        } else
            setPage(page + 1);
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Orders</title>
            </Helmet>
            <main className="content">
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Search by id</ModalHeader>
                    <ModalBody>
                        <Input type="text" onChange={(e) => {setSearchId(e.target.value)}} defaultValue=""/>
                    </ModalBody>
                </Modal>
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader tag="h2">
                            All orders
                            <Button color="success" onClick={toggle} className="float-right">Search by ID</Button>
                        </CardHeader>
                        <CardBody>
                            <OrdersList
                                orders={orders}
                                bgColor={props.bgColor}
                                fields={{
                                    index: true,
                                    id: true,
                                    date: true,
                                    status: true,
                                }}
                            />
                        </CardBody>
                        <CardFooter>
                            <Button className="btn-block" onClick={showMoreOrReload}>{searchId ? "Reload" : "Show more"}</Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </>
    )
}

export default Orders;
