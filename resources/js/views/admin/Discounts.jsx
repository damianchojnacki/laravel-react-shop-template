import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {
    Card,
    CardHeader,
    CardBody, Button,
} from 'reactstrap';

import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import DiscountsList from "../../components/admin/DiscountsList";
import {InertiaLink} from "@inertiajs/inertia-react";

function Discounts(props){
    const [discounts, setDiscounts] = useState([]);

    useEffect(() => {
        getDiscounts();
    }, []);

    const getDiscounts = async () => {
        const discounts = await ProductService.discounts.all();

        setDiscounts(discounts);
    };

    const handleDelete = discount => {
        ProductService.discounts.delete(discount.id)
            .then(res => {
                notify.show(res.data, 'success');

                getDiscounts();
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Discounts</title>
            </Helmet>
            <main className="content">
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader className="row justify-content-between">
                            <h2 className="col-md-3 col-12">
                                All discounts
                            </h2>
                            <InertiaLink to="/admin/discounts/new" className="col-md-3 col-12">
                                <Button color={props.bgColor} className="px-3" block>
                                    New discount
                                </Button>
                            </InertiaLink>
                        </CardHeader>
                        <CardBody>
                            <DiscountsList
                                data={discounts}
                                bgColor={props.bgColor}
                                deleteDiscount={handleDelete}
                            />
                        </CardBody>
                    </Card>
                </div>
            </main>
        </>
    )
}

export default Discounts;
