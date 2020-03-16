import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import Shop from "../../layouts/Shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import './user.scss';
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faPercentage } from "@fortawesome/free-solid-svg-icons/faPercentage";
import {
    InertiaLink,
    usePage
} from "@inertiajs/inertia-react";

function User(){
    const {auth} = usePage();

    return (
        <Shop>
            <div className="d-flex flex-wrap justify-content-around w-100">
                <h3 className="text-left w-100 mx-3 mt-5 mb-4">Welcome again <span className="font-italic">{auth.user.name}</span></h3>

                <InertiaLink href="/user/orders" className="user__card text-center p-0">
                    <Card>
                        <CardBody className="p-5">
                            <FontAwesomeIcon size="6x" icon={faShoppingCart}/>
                        </CardBody>
                        <CardFooter className="h5 px-5 mb-0">
                           Last orders
                        </CardFooter>
                    </Card>
                </InertiaLink>

                <InertiaLink href="/user/discounts" className="user__card text-center p-0">
                    <Card>
                        <CardBody className="p-5">
                            <FontAwesomeIcon size="6x" icon={faPercentage}/>
                        </CardBody>
                        <CardFooter className="h5 px-5 mb-0">
                            Your discounts
                        </CardFooter>
                    </Card>
                </InertiaLink>

                <InertiaLink href="/user/settings" className="user__card text-center p-0">
                    <Card>
                        <CardBody className="p-5">
                            <FontAwesomeIcon size="6x" icon={faCog}/>
                        </CardBody>
                        <CardFooter className="h5 px-5 mb-0">
                            Settings
                        </CardFooter>
                    </Card>
                </InertiaLink>
            </div>
        </Shop>
    )
}

export default User;
