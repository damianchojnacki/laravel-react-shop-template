import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Button, Card, CardBody, CardHeader, Input} from 'reactstrap';

import OrdersList from "../../components/admin/OrdersList";
import OrderService from "../../utils/OrderService";
import UserService from "../../utils/UserService";
import ProductService from "../../utils/ProductService";
import UsersList from "../../components/admin/UsersList";
import ProductsList from "../../components/admin/ProductsList";
import {InertiaLink} from "@inertiajs/inertia-react";
import Admin from "../../layouts/Admin";
import ResourceService from "../../utils/ResourceService";
import {capitalize} from "../../utils/helpers";
import {getTheme} from "../../utils/ThemeHelper";

window['OrderService'] = OrderService;
window['UserService'] = UserService;
window['ProductService'] = ProductService;

function Resource(props){
    const [searchField, setSearchField] = useState(null);

    const theme = getTheme();

    useEffect(() => {
        ResourceService.search(props.name, searchField);
    }, [searchField]);

    const getSearchFieldBy = (name = props.name) => {
        switch(name){
            case 'users':
                return 'email';

            case 'orders':
                return 'ID';

            case 'products':
                return 'name';
        }
    };

    return (
        <Admin>
            <Helmet>
                <title>Shop | Admin - {capitalize(props.name)}</title>
            </Helmet>
            <main className="content">
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader className="row justify-content-between align-items-center">
                            <h2 className="col-md-3 col-12 m-0">
                                All {props.name}
                            </h2>
                            <div className="col-md-3 col-12 my-md-0 my-4">
                                <Input type="text" className={theme} onChange={(e) => {setSearchField(e.target.value)}} placeholder={`Search by ${getSearchFieldBy()}`}/>
                            </div>
                            <InertiaLink href={`/admin/${props.name}/new`} className="col-md-3 col-12">
                                <Button color="success" className="px-3" block>
                                    New {props.name.slice(0, -1)}
                                </Button>
                            </InertiaLink>
                        </CardHeader>
                        <CardBody>
                            {props.name === "orders" &&
                                <OrdersList
                                    data={props.data}
                                    bgColor={theme}
                                    fields={{
                                        index: true,
                                        id: true,
                                        date: true,
                                        status: true,
                                    }}
                                />
                            }

                            {props.name === "users" &&
                                <UsersList
                                    data={props.data}
                                    bgColor={theme}
                                    fields={{
                                        index: true,
                                        date: true,
                                        email: true,
                                    }}
                                />
                            }

                            {props.name === "products" &&
                                <ProductsList
                                    data={props.data}
                                    bgColor={theme}
                                    fields={{
                                        index: true,
                                        name: true,
                                        type: true,
                                        price: true,
                                    }}
                                />
                            }
                        </CardBody>
                    </Card>
                </div>
            </main>
        </Admin>
    )
}

export default Resource;
