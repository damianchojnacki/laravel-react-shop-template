import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, ListGroup, ListGroupItem, Button} from "reactstrap";
import {Link} from "react-router-dom";

function ProductsListComplex(props){
    return (
        (props.data && props.data.length > 0) ? props.data.map(product => {
            return (
                <Card key={product.id}>
                    <CardHeader>
                        <CardTitle tag="h3">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.url} alt={product.name}/>}
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
                        <Link className={`btn btn-${props.bgColor}`} to={`/admin/products/${product.id}`}>Details</Link>
                    </CardFooter>
                </Card>
            );
        }) : null
    )
}

export default ProductsListComplex;
