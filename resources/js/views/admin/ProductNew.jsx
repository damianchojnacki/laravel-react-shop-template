import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

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
import Notifications, {notify} from 'react-notify-toast';
import ProductService from "../../utils/ProductService";
import ImageService from "../../utils/ImageService";
import ChartService from "../../utils/ChartService";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import CustomInput from "reactstrap/es/CustomInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import {faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons/faCloudUploadAlt";

function ProductNew(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState({});
    const [type, setType] = useState('');
    const [productTypes, setProductTypes] = useState([]);
    const [redirect, setRedirect] = useState();

    useEffect(() => {
        (async function (){
            const types = await ProductService.types();

            setType(types[0].id);

            const options =  types.map((type) => {
                return <option key={type.id} value={type.id}>{type.long}</option>
            });

            setProductTypes(options);
        })();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: name,
            price: price,
            img: image.id,
            type: type,
        };

        ProductService.add(data)
            .then(res => {
                notify.show(`${name} has been added.`, 'success');
                setRedirect(<Redirect to={`/admin/products/${res.data}`}/>)
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

    return (
        <div className="content">
            {redirect}
            <Row>
                <Col md="8">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">New product</h2>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <label>Name</label>
                                        <Input
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
                                            {productTypes}
                                        </Input>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="success" type="submit">
                                    Add
                                </Button>
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

export default ProductNew;
