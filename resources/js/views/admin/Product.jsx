import React, {useEffect, useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";
import AuthService from "../../utils/AuthService";
import ProductService from "../../utils/ProductService";

function Product(props){
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function get(){
            const product = await ProductService.get(props.match.params.id);
            setProduct(product);
        }
        get();
    }, []);

    return (
        <div className="content">
            <Row>
                <Col md="8">
                    <Card>
                        <CardHeader>
                            <h2 className="card-title">Product</h2>
                            {/*<h5 className="card-category">ID: {product.id}</h5>*/}
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col md="12">
                                        <label>ID</label>
                                        <Input
                                            defaultValue={product.id}
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Name</label>
                                        <Input
                                            defaultValue={product.name}
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Price</label>
                                        <Input
                                            defaultValue={product.price}
                                            type="number"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button className="btn-fill" color="primary" type="submit">
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="justify-content-center align-items-center" style={{display:"flex"}}>
                    {product.image && <img src={product.image.url} alt={product.name}/>}
                </Col>
            </Row>
        </div>
    );
}

export default Product;
