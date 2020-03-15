import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import Shop from "../../layouts/Shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import './user.scss';
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faPercentage } from "@fortawesome/free-solid-svg-icons/faPercentage";

function User({user}){
    return (
        <Shop>
            <div className="container d-flex flex-wrap justify-content-around">
                <Card className="user__card m-2 text-center p-0">
                    <CardBody className="p-5">
                        <FontAwesomeIcon size="6x" icon={faShoppingCart}/>
                    </CardBody>
                    <CardFooter className="h5 px-5 mb-0">
                       Last orders
                    </CardFooter>
                </Card>

                <Card className="user__card m-2 text-center p-0">
                    <CardBody className="p-5">
                        <FontAwesomeIcon size="6x" icon={faPercentage}/>
                    </CardBody>
                    <CardFooter className="h5 px-5 mb-0">
                        Your discounts
                    </CardFooter>
                </Card>

                <Card className="user__card m-2 text-center p-0">
                    <CardBody className="p-5">
                        <FontAwesomeIcon size="6x" icon={faCog}/>
                    </CardBody>
                    <CardFooter className="h5 px-5 mb-0">
                        Settings
                    </CardFooter>
                </Card>
            </div>
        </Shop>
    )
}

export default User;
