import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, Button} from "shards-react";
import {notify} from "react-notify-toast";
import {CartContext} from "../../../utils/CartContext";
import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

function ProductsListComplex(props){
    const {state, dispatch} = React.useContext(CartContext);

    const addToCart = product => {
        dispatch({type: "add", payload: product.id});

        notify.show(`${product.name} has been added to cart.`, 'success', 1500);
    };

    const removeFromCart = product => {
        dispatch({type: "remove", payload: product.id});

        notify.show(`${product.name} has been removed to cart.`, 'success', 1500);
    };

    return (
        (props.data && props.data.length) && props.data.map(product => {
            return (
                <Card key={product.id} className="product m-2">
                    <CardHeader className="h-75 product__header">
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.src} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <p>
                            {product.price &&
                                <>
                                    <span className="font-weight-bold">Price: </span>
                                    {product.discount ?
                                        <>
                                            <span className="text-danger" style={{textDecoration: "line-through" }}>{product.price} $</span>
                                            <FontAwesomeIcon icon={faArrowRight} className="mx-2"/>
                                            <span>{product.final_price} $</span>
                                        </> :
                                        <span>{product.price} $</span>
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
