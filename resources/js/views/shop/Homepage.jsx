import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useParams} from 'react-router-dom';
import {Alert, Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import ProductService from "../../utils/ProductService";
import ProductsListComplex from "../../components/shop/ProductListComplex";
import {useCart} from "../../utils/CartContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {newArray} from "../../utils/helpers";
import {useCurrency} from "../../utils/CurrencyContext";
import Translate from "../../components/Translate";

function Homepage(props){
    const params = useParams();
    const cart = useCart();
    const currency = useCurrency();

    const [productsDiscounted, setProductsDiscounted] = useState([]);
    const [specialOffer, setSpecialOffer] = useState([]);

    useEffect(() => {
        (async () => {
            const productsDiscounted = await ProductService.discounts.all();

            productsDiscounted.sort((previous, next) => {
                return previous.discount.percent_off - next.discount.percent_off;
            });

            setSpecialOffer(productsDiscounted.pop());

            //slice can be removed but displayed products will be moved to the edges (flex)
            setProductsDiscounted(productsDiscounted.slice(productsDiscounted.length % 4));
        })();
    }, [currency.state]);

    const addToCart = product => {
        cart.dispatch({type: "add", payload: product.id});

        //notify.show(`${product.name} ${<Translate id="cart-alert-add"/>}`, 'success', 1500);
    };

    const removeFromCart = product => {
        cart.dispatch({type: "remove", payload: product.id});

        //notify.show(`${product.name} <Translate id="cart-alert-remove"/>`, 'success', 1500);
    };

    return (
        <>
            <Helmet>
                <title>Shop | Homepage</title>
            </Helmet>

            <main className="d-flex flex-column">
                {params.status === "registration-successful" &&
                    <Alert theme="success" className="m-2 mb-4">
                        <Translate id="welcome"/>
                    </Alert>
                }
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
                                    <h3 className="w-100 text-center m-0 mb-4">
                                        <Translate id="products-special-header"/>
                                    </h3>
                                    <span className="display-4 text-danger" style={{textDecoration: "line-through"}}>{specialOffer.price_origin} {currency.state.symbol}</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="product__arrow mx-4 h3"/>
                                    <span className="display-4">{specialOffer.price_final} {currency.state.symbol}</span>
                                </>
                            }
                        </CardBody>
                    </div>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {specialOffer.id &&
                            <>
                                {cart.state.products.includes(specialOffer.id) &&
                                        <Button block size="big" className="btn btn-danger my-1" onClick={() => removeFromCart(specialOffer)}>
                                            <Translate id="cart-remove"/>
                                        </Button>
                                }
                                <Button block size="big" className="btn btn-secondary my-1" onClick={() => addToCart(specialOffer)}>
                                    <Translate id="cart-add"/>
                                </Button>
                            </>
                        }
                    </CardFooter>
                </Card>
                <div className="main my-2 d-flex w-100 justify-content-between flex-wrap">
                    <ProductsListComplex {...props} data={productsDiscounted.length ? productsDiscounted : props.productsDiscounted} />
                </div>
            </main>
        </>
    )
}

Homepage.defaultProps = {
    productsDiscounted: newArray(4, {
        name: '',
        price: '',
    })
};

export default Homepage;
