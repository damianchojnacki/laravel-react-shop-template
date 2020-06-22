import React, {useContext} from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, Button} from "shards-react";
import {notify} from "react-notify-toast";
import {CartContext} from "../../../utils/CartContext";
import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {CurrencyContext} from "../../../utils/CurrencyContext";

function ProductsListComplex(props){
    const {state, dispatch} = React.useContext(CartContext);
    const currency = useContext(CurrencyContext).state.currency;

    console.log(currency);

    const addToCart = product => {
        dispatch({type: "add", payload: product.id});

        notify.show(`${product.name} has been added to cart.`, 'success', 1500);
    };

    const removeFromCart = product => {
        dispatch({type: "remove", payload: product.id});

        notify.show(`${product.name} has been removed to cart.`, 'success', 1500);
    };

    const sortProducts = products => {
        return products.sort((previous, next) => {
            if(props.sort.type === "desc"){
                const pre = previous;

                previous = next;
                next = pre;
            }

            if(props.sort.sort === "id") return previous.id - next.id;
            if(props.sort.sort === "name") return previous.name.localeCompare(next.name);
            if(props.sort.sort === "price") return previous.price_final - next.price_final;
        });
    };

    const data = (props.data && props.data.length && props.data[0].name) && props.sort ? sortProducts(props.data) : props.data;

    return (
        (data && data.length) && data.map(product => {
            return (
                <Card key={product.id} className="product m-2">
                    <CardHeader className="h-75 product__header">
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.src} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <p>
                            {product.price_origin &&
                                <>
                                    <span className="font-weight-bold">Price: </span>
                                    {product.discount ?
                                        <>
                                            <span className="text-danger" style={{textDecoration: "line-through" }}>{product.price_origin} {currency.symbol}</span>
                                            <FontAwesomeIcon icon={faArrowRight} className="mx-2"/>
                                            <span>{product.price_final} {currency.symbol}</span>
                                        </>
                                        :
                                        <span>{product.price_origin} {currency.symbol}</span>
                                    }
                                </>
                            }
                        </p>
                    </CardBody>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {product.name &&
                            <>
                                {state.cart.includes(product.id) &&
                                        <Button size="sm" className="btn btn-danger my-1" onClick={() => removeFromCart(product)}>Remove</Button>
                                }
                                <Button size="sm" className="btn btn-secondary my-1" onClick={() => addToCart(product)}>Add to cart</Button>
                            </>
                        }
                    </CardFooter>
                </Card>
            );
        })
    )
}

export default ProductsListComplex;
