import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {Alert, Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from 'shards-react';
import ProductService from "../../utils/ProductService";
import ProductsListComplex from "../../components/shop/ProductListComplex";
import {CartContext} from "../../utils/CartContext";
import {notify} from "react-notify-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {newArray} from "../../utils/helpers";

function Home(props){
    const result = props.match.params.result;

    const {state, dispatch} = React.useContext(CartContext);

    const [productsDiscounted, setProductsDiscounted] = useState([]);
    const [specialOffer, setSpecialOffer] = useState([]);

    useEffect(() => {
        (async () => {
            const productsDiscounted = await ProductService.discounts.all();

            productsDiscounted.sort((previous, next) => {
                return previous.discount.percent_off - next.discount.percent_off;
            });

            setSpecialOffer(productsDiscounted.pop());
            setProductsDiscounted(productsDiscounted);
        })();
    }, []);

    const addToCart = product => {
        dispatch({type: "add", payload: product.id});

        notify.show(`${product.name} has been added to cart.`, 'success', 1500);
    };

    const removeFromCart = product => {
        dispatch({type: "remove", payload: product.id});

        notify.show(`${product.name} has been removed to cart.`, 'success', 1500);
    };

    return (
        <>
            <Helmet>
                <title>Shop | Homepage</title>
            </Helmet>
            {result === "success" &&
                <Alert theme="success">
                    You've successfully registered and logged in. You can start shopping right now!
                </Alert>
            }
            <main className="col-md-12">
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
                                    <span className="display-4 text-danger" style={{textDecoration: "line-through"}}>{specialOffer.price} $</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="product__arrow mx-4 h3"/>
                                    <span className="display-4">{specialOffer.price_final} $</span>
                                </>
                            }
                        </CardBody>
                    </div>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {specialOffer.id &&
                            <>
                                {state.cart.includes(specialOffer.id) &&
                                        <Button block size="big" className="btn btn-danger my-1" onClick={() => removeFromCart(specialOffer)}>Remove</Button>
                                }
                                <Button block size="big" className="btn btn-secondary my-1" onClick={() => addToCart(specialOffer)}>Add to cart</Button>
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

Home.defaultProps = {
    productsDiscounted: newArray(4, {
        name: '',
        price: '',
    })
};

export default Home;
