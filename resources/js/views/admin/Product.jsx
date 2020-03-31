import React, {useEffect, useState} from "react";
// reactstrap components
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Row} from "reactstrap";
import {notify} from 'react-notify-toast';
import ProductService from "../../utils/ProductService";
import ImageService from "../../utils/ImageService";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons/faCloudUploadAlt";

function Product(props) {
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('1');
    const [image, setImage] = useState('');
    const [productsTypes, setProductsTypes] = useState([]);
    const id = props.match.params.id;

    useEffect(() => {
        (async function (){
            const types = await ProductService.types();

            const options =  types.map((type) => {
                return <option key={type.id} value={type.id}>{type.long}</option>
            });

            setProductsTypes(options);

            if(id !== 'new'){
                const product = await ProductService.get(props.match.params.id);
                setProduct(product);
                setName(product.name);
                setPrice(product.price);
                setType(product.type.id);
                setImage(product.image);
            }
        })();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            id: id,
            name: name,
            price: price,
            type: type,
            img: image.id,
        };

        if(id !== 'new')
            ProductService.edit(data)
                .then(res => {
                    notify.show(res.data, 'success');
                })
                .catch(error => {
                    notify.show(error.response.data.message, 'error');
                });
        else
            ProductService.create(data)
                .then(res => {
                    notify.show(`${name} has been added.`, 'success');
                    //setRedirect(<Redirect to={`/admin/products/${res.data}`}/>)
                })
                .catch(error => {
                    notify.show(error.response.data.message, 'error');
                });
    };

    const uploadImage = image => {
        ImageService.upload(image)
            .then(res => {
                setImage(res.data);
                notify.show(`Image has been uploaded.`, 'success');
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    const handleDelete = () => {
        ProductService.delete(id)
            .then(res => {
                notify.show(res.data, 'success');
                //setRedirect(<Redirect to="/admin/products"/>)
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    return (
        <div className="content">
            <Row>
                <Col md="8">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">{id !== 'new' ? "Product" : "New product"}</h2>
                                {/*<h5 className="card-category">ID: {product.id}</h5>*/}
                            </CardHeader>
                            <CardBody>
                                {id !== 'new' &&
                                    <Row>
                                        <Col md="12">
                                            <label>ID</label>
                                            <Input
                                                value={id}
                                                type="text"
                                                disabled
                                            />
                                        </Col>
                                    </Row>
                                }
                                <Row>
                                    <Col md="12">
                                        <label>Name</label>
                                        <Input
                                            defaultValue={product.name}
                                            type="text"
                                            onChange={e => setName(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Price</label>
                                        <Input
                                            defaultValue={product.price}
                                            type="number"
                                            onChange={e => setPrice(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Type</label>
                                        <Input
                                            type="select"
                                            value={type}
                                            onChange={e => setType(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        >
                                            {productsTypes}
                                        </Input>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                {id !== 'new' ?
                                    <>
                                        <Button className="btn-fill" color={props.bgColor} type="submit">
                                            Save
                                        </Button>
                                        <Button className="btn-fill" color="danger" type="button" onClick={handleDelete}>
                                            Delete
                                        </Button>
                                    </>
                                :
                                    <Button className="btn-fill" color="success" type="submit">
                                        Add
                                    </Button>
                                }
                            </CardFooter>
                        </Card>
                    </Form>
                </Col>
                <Col md="4" className="justify-content-center align-items-center" style={{display: "flex"}}>
                    {image.src ?
                        <img src={image.src} alt={name}/>
                        :
                        <FormGroup>
                            <Label for="exampleCustomFileBrowser" className="text-center">
                                <FontAwesomeIcon size="6x" icon={faCloudUploadAlt}/>
                                <p className="mt-2">Upload product image</p>
                            </Label>
                            <Input type="file" style={{opacity: 0}} onChange={e => uploadImage(e.target.files[0])}/>
                        </FormGroup>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default Product;
