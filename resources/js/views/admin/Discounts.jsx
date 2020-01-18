import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody, Button,
} from 'reactstrap';

import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import DiscountsList from "../../components/admin/DiscountsList";

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
                        <CardHeader tag="h2">
                            All discounts
                            <Link to="/admin/discounts/new">
                                <Button color={props.bgColor} className="float-right">
                                    New discount
                                </Button>
                            </Link>
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
