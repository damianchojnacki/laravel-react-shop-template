import React from 'react';
import { Helmet } from 'react-helmet';
import {Alert, Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import ProductsListComplex from "../../components/shop/ProductListComplex";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import Shop from "../../layouts/Shop";
import CartService from "../../utils/CartService";
import {usePage} from "@inertiajs/inertia-react";

function Home({specialOffer, productsDiscounted}){
    const {cart, currency} = usePage();

    return (
        <Shop>
            <Helmet>
                <title>Shop | Homepage</title>
            </Helmet>

            <main className="d-flex flex-column">
                <Card className="m-2">
                    <div className="row position-relative m-0">
                        <CardHeader className="h-100 col-md-3 col-12" style={{minHeight: '275px'}}>
                            <CardTitle tag="h5">{specialOffer.name}</CardTitle>
                            {specialOffer.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={specialOffer.image.src} alt={specialOffer.name}/>}
                        </CardHeader>
                        <CardBody className="col-md-9 col-12 d-flex flex-wrap align-items-center justify-content-center py-5 position-static">
                            {specialOffer.id &&
                                <>
                                    <div className="h5 position-absolute m-4 rounded-circle bg-danger text-white d-flex justify-content-center align-items-center font-weight-bold" style={{top: 0, right: 0, height: "calc(50px + 1vw)", width: "calc(50px + 1vw)"}}>-{specialOffer.discount && specialOffer.discount.percent_off}%</div>
                                    <h3 className="w-100 text-center m-0 mb-4">Offer of the day: </h3>
                                    <span className="display-4 text-danger" style={{textDecoration: "line-through"}}>{specialOffer.price_origin} {currency.symbol}</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="product__arrow mx-4 h3"/>
                                    <span className="display-4">{specialOffer.price_final} {currency.symbol}</span>
                                </>
                            }
                        </CardBody>
                    </div>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {specialOffer.id &&
                            <>
                                {CartService.in(cart, specialOffer) &&
                                        <Button block size="big" className="btn btn-danger my-1" onClick={() => CartService.remove(specialOffer)}>Remove</Button>
                                }
                                <Button block size="big" className="btn btn-secondary my-1" onClick={() => CartService.add(specialOffer)}>Add to cart</Button>
                            </>
                        }
                    </CardFooter>
                </Card>
                <div className="main my-2 d-flex w-100 justify-content-between flex-wrap">
                    <ProductsListComplex data={productsDiscounted} />
                </div>
            </main>
        </Shop>
    )
}

export default Home;
