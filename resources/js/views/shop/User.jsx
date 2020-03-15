import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import Shop from "../../layouts/Shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import './user.scss';
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faPercentage } from "@fortawesome/free-solid-svg-icons/faPercentage";
import { InertiaLink } from "@inertiajs/inertia-react";

function User({user}){
    return (
        <Shop>
            <div className="container d-flex flex-wrap justify-content-around">
                <InertiaLink href="/user/orders" className="user__card m-2 text-center p-0">
                    <Card>
                        <CardBody className="p-5">
                            <FontAwesomeIcon size="6x" icon={faShoppingCart}/>
                        </CardBody>
                        <CardFooter className="h5 px-5 mb-0">
                           Last orders
                        </CardFooter>
                    </Card>
                </InertiaLink>

                <InertiaLink href="/user/discounts" className="user__card m-2 text-center p-0">
                    <Card>
                        <CardBody className="p-5">
                            <FontAwesomeIcon size="6x" icon={faPercentage}/>
                        </CardBody>
                        <CardFooter className="h5 px-5 mb-0">
                            Your discounts
                        </CardFooter>
                    </Card>
                </InertiaLink>

                <InertiaLink href="/user/settings" className="user__card m-2 text-center p-0">
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
