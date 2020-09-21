import React from 'react';
import {Card, CardBody, CardFooter} from 'shards-react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {faPercentage} from "@fortawesome/free-solid-svg-icons/faPercentage";
import {Link, Redirect} from "react-router-dom";
import {useAuth} from "../../../utils/stores/AuthContext";

import './index.scss';

function User(){
    const auth = useAuth();

    return (
        <>
            {!auth.state.authenticated ?
                <Redirect to="/login"/>
            :
                <div className="d-flex flex-wrap justify-content-around w-100">
                    <h3 className="text-left w-100 mx-3 mt-5 mb-4">Welcome again <span className="font-italic">{auth.state.user.name}</span></h3>

                    <Link to="/user/orders" className="user__card text-center p-0">
                        <Card>
                            <CardBody className="p-5">
                                <FontAwesomeIcon size="6x" icon={faShoppingCart}/>
                            </CardBody>
                            <CardFooter className="h5 px-5 mb-0">
                                Last orders
                            </CardFooter>
                        </Card>
                    </Link>

                    <Link to="/user/discounts" className="user__card text-center p-0">
                        <Card>
                            <CardBody className="p-5">
                                <FontAwesomeIcon size="6x" icon={faPercentage}/>
                            </CardBody>
                            <CardFooter className="h5 px-5 mb-0">
                                Your discounts
                            </CardFooter>
                        </Card>
                    </Link>

                    <Link to="/user/settings" className="user__card text-center p-0">
                        <Card>
                            <CardBody className="p-5">
                                <FontAwesomeIcon size="6x" icon={faCog}/>
                            </CardBody>
                            <CardFooter className="h5 px-5 mb-0">
                                Settings
                            </CardFooter>
                        </Card>
                    </Link>
                </div>
            }
        </>
    )
}

export default User;
