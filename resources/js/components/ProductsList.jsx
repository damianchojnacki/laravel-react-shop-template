import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

function ProductsList(props){
    return (
        props.products ? props.products.map(product => {
            return (
                <Card key={product.id}>
                    <CardHeader>
                        <CardTitle tag="h4">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto d-block" style={{maxHeight: '200px'}} src={product.image.url} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem>
                                <span className="font-weight-bold">Product price: </span>
                                {product.price}
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className="font-weight-bold">Quantity: </span>
                                {product.pivot.quantity}
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                    <CardFooter className="text-right">
                        <Link className={`btn btn-${props.bgColor}`} to={`/admin/products/${product.id}`}>Product details</Link>
                    </CardFooter>
                </Card>
            );
        }) : null
    )
}

export default ProductsList;
