import React from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle, ListGroup, ListGroupItem} from "reactstrap";
import {InertiaLink} from "@inertiajs/inertia-react";

function ProductsListComplex(props){
    return (
        (props.data && props.data.length > 0) ? props.data.map(product => {
            return (
                <Card key={product.id}>
                    <CardHeader>
                        <CardTitle tag="h3">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.src} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem>
                                <span className="font-weight-bold">Price: </span>
                                {product.price} $
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className="font-weight-bold">Quantity: </span>
                                {product.pivot.quantity}
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                    <CardFooter className="text-right">
                        <Button color="danger" onClick={() => {props.remove(product.id)}}>Remove</Button>
                        <InertiaLink className={`btn btn-${props.bgColor}`} href={`/admin/products/${product.id}`}>Details</InertiaLink>
                    </CardFooter>
                </Card>
            );
        }) : null
    )
}

export default ProductsListComplex;
