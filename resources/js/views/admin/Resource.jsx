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

import OrdersList from "../../components/admin/OrdersList";
import OrderService from "../../utils/OrderService";
import UserService from "../../utils/UserService";
import ProductService from "../../utils/ProductService";
import UsersList from "../../components/admin/UsersList";
import ProductsList from "../../components/admin/ProductsList";

window['OrderService'] = OrderService;
window['UserService'] = UserService;
window['ProductService'] = ProductService;

function Resource(props){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchField, setSearchField] = useState(null);
    const [searchFieldBy, setSearchFieldBy] = useState('');
    const [service, setService] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        initialLoad();
        service && getResource();
    }, [page, searchField, service]);

    const toggle = () => setModal(!modal);

    const getResource = async () => {
        if(searchField && searchField !== ""){
            const found = await window[service].search(searchField);

            setData(found);
        } else if(searchField === ""){
            setData([]);
            setPage(1);
            setSearchField(null);
        } else{
            const newData = await window[service].all(page);

            setData(data.concat(newData));
        }
    };

    const showMoreOrReload = () => {
        if(searchField){
            setSearchField(null);
            setData([]);
            setPage(1);
        } else
            setPage(page + 1);
    };

    const initialLoad = (name = props.name) => {
        let field, classname;

        switch(name){
            case 'Users':
                field = 'email';
                classname = 'UserService';
                break;

            case 'Orders':
                field = 'ID';
                classname = 'OrderService';
                break;

            case 'Products':
                field = 'name';
                classname = 'ProductService';
                break;
        }

        setSearchFieldBy(field);
        setService(classname);
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - {props.name}</title>
            </Helmet>
            <main className="content">
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        Search by {searchFieldBy}
                    </ModalHeader>
                    <ModalBody>
                        <Input type="text" onChange={(e) => {setSearchField(e.target.value)}} defaultValue=""/>
                    </ModalBody>
                </Modal>
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader tag="h2">
                            All {props.name}
                            <Button color="success" onClick={toggle} className="float-right">
                                Search by {searchFieldBy}
                            </Button>
                        </CardHeader>
                        <CardBody>
                            {props.name === "Orders" &&
                                <OrdersList
                                    data={data}
                                    bgColor={props.bgColor}
                                    fields={{
                                        index: true,
                                        id: true,
                                        date: true,
                                        status: true,
                                    }}
                                />
                            }

                            {props.name === "Users" &&
                                <UsersList
                                    data={data}
                                    bgColor={props.bgColor}
                                    fields={{
                                        index: true,
                                        date: true,
                                        email: true,
                                    }}
                                />
                            }

                            {props.name === "Products" &&
                                <ProductsList
                                    data={data}
                                    bgColor={props.bgColor}
                                    fields={{
                                        index: true,
                                        name: true,
                                        type: true,
                                        price: true,
                                    }}
                                />
                            }
                        </CardBody>
                        <CardFooter>
                            <Button className="btn-block" onClick={showMoreOrReload}>{searchField ? "Reload" : "Show more"}</Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </>
    )
}

export default Resource;
