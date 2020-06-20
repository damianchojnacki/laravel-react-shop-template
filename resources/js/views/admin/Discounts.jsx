import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Button, Card, CardBody, CardHeader, Input,} from 'reactstrap';

import ProductService from "../../utils/ProductService";
import DiscountsList from "../../components/admin/DiscountsList";
import {InertiaLink} from "@inertiajs/inertia-react";
import Admin from "../../layouts/Admin";
import {getTheme} from "../../utils/ThemeHelper";

function Discounts(props){
    const [searchField, setSearchField] = useState(null);

    const theme = getTheme();

    useEffect(() => {
        ProductService.discounts.search(searchField);
    }, [searchField]);

    const handleDelete = discount => {
        ProductService.discounts.delete(discount.id);
    };

    return (
        <Admin>
            <Helmet>
                <title>Shop | Admin - Discounts</title>
            </Helmet>
            <main className="content">
                <div className="col-md-12">
                    <Card className="card-plain">
                        <CardHeader className="row justify-content-between align-items-center">
                            <h2 className="col-md-3 col-12 m-0">
                                All discounts
                            </h2>
                            <div className="col-md-3 col-12 my-md-0 my-4">
                                <Input type="text" className={theme} onChange={(e) => {setSearchField(e.target.value)}} placeholder={`Search by product`}/>
                            </div>
                            <InertiaLink href="/admin/discounts/new" className="col-md-3 col-12">
                                <Button color="success" className="px-3" block>
                                    New discount
                                </Button>
                            </InertiaLink>
                        </CardHeader>
                        <CardBody>
                            <DiscountsList
                                data={props.discounts}
                                bgColor={theme}
                                deleteDiscount={handleDelete}
                            />
                        </CardBody>
                    </Card>
                </div>
            </main>
        </Admin>
    )
}

export default Discounts;
