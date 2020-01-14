import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, Button} from "shards-react";
import {CartContext} from "../../utils/CartContext";

function ProductsListComplex(props){
    const {state, dispatch} = React.useContext(CartContext);

    return (
        (props.data && props.data.length > 0) ? props.data.map(product => {
            return (
                <Card key={product.id} style={{width: window.innerWidth < 1200 ? window.innerWidth < 760 ? "100%" : "30%" : "23%"}} className="m-2">
                    <CardHeader className="h-75">
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.url} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <p>
                            <span className="font-weight-bold">Price: </span>
                            {product.price} $
                        </p>
                    </CardBody>
                    <CardFooter className="d-flex flex-wrap justify-content-between">
                        {state.includes(product.id) &&
                            <Button size="sm" className="btn btn-danger my-1" onClick={() => props.removeFromCart(product)}>Remove</Button>
                        }
                        <Button size="sm" className="btn btn-secondary my-1" onClick={() => props.addToCart(product)}>Add to cart</Button>
                    </CardFooter>
                </Card>
            );
        }) : null
    )
}

export default ProductsListComplex;
