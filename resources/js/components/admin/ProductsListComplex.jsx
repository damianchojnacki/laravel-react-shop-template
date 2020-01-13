import React from "react";
import {Card, CardBody, CardHeader, CardTitle, CardFooter, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

function ProductsListComplex(props){
    const color = props.bgColor ? props.bgColor : "secondary";

    return (
        (props.data && props.data.length > 0) ? props.data.map(product => {
            return (
                <Card key={product.id} style={{width: props.width ? window.innerWidth > 760  ? "23%" : "100%" : null}} className={props.width ? "m-2" : null}>
                    <CardHeader className="h-75">
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        {product.image && <img className="rounded mx-auto mw-100 d-block" style={{maxHeight: '200px'}} src={product.image.url} alt={product.name}/>}
                    </CardHeader>
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem>
                                <span className="font-weight-bold">Price: </span>
                                {product.price} $
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
                        <Link className={`btn btn-${color}`} to={`/admin/products/${product.id}`}>Details</Link>
                    </CardFooter>
                </Card>
            );
        }) : null
    )
}

export default ProductsListComplex;
