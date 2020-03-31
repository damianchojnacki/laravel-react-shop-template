import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle} from "shards-react";
import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePage} from "@inertiajs/inertia-react";
import CartService from "../../../utils/CartService";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons/faCaretRight";
import Text from "../../Text";

function ProductsListComplex(props){
    const {cart, currency} = usePage();

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
                <Card key={product.id} className="product my-2">
                    <CardHeader className="h-75 product__header">
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.src} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <p>
                            <>
                                <span className="font-weight-bold">
                                    <Text id="products-block-price"/>
                                </span>
                                {product.discount ?
                                    <>
                                        <span className="text-danger" style={{textDecoration: "line-through" }}>{product.price_origin} {currency.symbol}</span>
                                        <FontAwesomeIcon icon={faCaretRight} className="mx-2"/>
                                        <span>{product.price_final} {currency.symbol}</span>
                                    </>
                                :
                                    <span>{product.price_origin} {currency.symbol}</span>
                                }
                            </>
                        </p>
                    </CardBody>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {product.name &&
                            <>
                                {CartService.in(cart, product) &&
                                        <Button size="sm" className="btn btn-danger my-1" onClick={() => CartService.remove(product)}>
                                            <Text id="cart-remove"/>
                                        </Button>
                                }
                                <Button size="sm" className="btn btn-secondary my-1" onClick={() => CartService.add(product)}>
                                    <Text id="cart-add"/>
                                </Button>
                            </>
                        }
                    </CardFooter>
                </Card>
            );
        })
    )
}

export default ProductsListComplex;
