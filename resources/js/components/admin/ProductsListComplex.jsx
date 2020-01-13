import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

function ProductsListComplex(props){
    const color = props.bgColor ? props.bgColor : "primary";

    return (
        (props.data && props.data.length > 0) ? props.data.map(product => {
            return (
                <Card key={product.id} className={props.width ? "w-25" : null}>
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
                            {product.pivot &&
                                <ListGroupItem>
                                    <span className="font-weight-bold">Quantity: </span>
                                    {product.pivot.quantity}
                                </ListGroupItem>
                            }
                        </ListGroup>
                    </CardBody>
                    <CardFooter className="text-right">
                        <Link className={`btn btn-${color}`} to={`/admin/products/${product.id}`}>Product details</Link>
                    </CardFooter>
                </Card>
            );
        }) : null
    )
}

export default ProductsListComplex;
