import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import ProductsListComplex from "../../components/shop/ProductListComplex";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Shop from "../../layouts/Shop";
import CartService from "../../utils/CartService";
import {usePage} from "@inertiajs/inertia-react";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons/faCaretRight";
import Text from "../../components/Text";

function Homepage({specialOffer, productsDiscounted}){
    const {cart, currency} = usePage();

    return (
        <Shop>
            <div className="w-100 d-flex flex-column">
                <Card className="mb-2">
                    <div className="row position-relative m-0">
                        <CardHeader className="h-100 col-md-3 col-12" style={{minHeight: '275px'}}>
                            <CardTitle tag="h5">{specialOffer.name}</CardTitle>
                            {specialOffer.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={specialOffer.image.src} alt={specialOffer.name}/>}
                        </CardHeader>
                        <CardBody className="col-md-9 col-12 d-flex flex-wrap align-items-center justify-content-center py-5 position-static">
                            {specialOffer.id &&
                                <>
                                    <div className="h5 position-absolute m-4 rounded-circle bg-danger text-white d-flex justify-content-center align-items-center font-weight-bold" style={{top: 0, right: 0, height: "calc(50px + 1vw)", width: "calc(50px + 1vw)"}}>-{specialOffer.discount && specialOffer.discount.percent_off}%</div>
                                    <h3 className="w-100 text-center m-0 mb-4">
                                        <Text id="products-special-header"/>
                                    </h3>
                                    <span className="display-4 text-danger" style={{textDecoration: "line-through"}}>{specialOffer.price_origin} {currency.symbol}</span>
                                    <FontAwesomeIcon icon={faCaretRight} className="product__arrow mx-4 h3"/>
                                    <span className="display-4">{specialOffer.price_final} {currency.symbol}</span>
                                </>
                            }
                        </CardBody>
                    </div>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {specialOffer.id &&
                            <>
                                {CartService.in(cart, specialOffer) &&
                                        <Button block size="big" className="btn btn-danger my-1" onClick={() => CartService.remove(specialOffer)}>
                                            <Text id="cart-remove"/>
                                        </Button>
                                }
                                <Button block size="big" className="btn btn-secondary my-1" onClick={() => CartService.add(specialOffer)}>
                                    <Text id="cart-add"/>
                                </Button>
                            </>
                        }
                    </CardFooter>
                </Card>
                <div className="main my-2 d-flex w-100 justify-content-between flex-wrap">
                    <ProductsListComplex data={productsDiscounted} />
                </div>
            </div>
        </Shop>
    )
}

export default Homepage;
