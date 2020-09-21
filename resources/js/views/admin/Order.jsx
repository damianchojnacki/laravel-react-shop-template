import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
// reactstrap components
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Row} from "reactstrap";
import {notify} from 'react-notify-toast';
import OrderService from "../../utils/services/OrderService";
import ProductsListComplex from "../../components/admin/ProductsListComplex";
import ProductsList from "../../components/admin/ProductsList";

function Order(props) {
    const [order, setOrder] = useState({});
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [zipCode, setZipCode] = useState();
    const [products, setProducts] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const [status, setStatus] = useState();
    const [statuses, setStatuses] = useState([]);
    const [redirect, setRedirect] = useState();
    const [date, setDate] = useState('');
    const [value, setValue] = useState(0);

    const id = props.match.params.id;

    useEffect(() => {
        (async function(){
            const statuses = await window.axios.get('/api/orders/statuses');

            setStatuses(statuses.data.map((status) => {
                return <option key={status.id} value={status.id}>{status.name}</option>
            }));

            if(id !== 'new'){
                const order = await OrderService.get(id);

                setOrder(order);
                setProducts(order.products);
                setStatus(order.status.id);
                setEmail(order.details.email);
                setName(order.details.name);
                setAddress(order.details.address);
                setZipCode(order.details.zip_code);
            }
            else{
                const products = await ProductService.all();

                setProductsList(products);
            }
        })();
    }, []);

    useEffect(() => {
        let value = 0;

        products.map(product => {
            value += parseFloat(product.price_final);
        });

        setValue(value.toFixed(2));
    }, [products]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: order.id,
            status: status,
            products: products,
            email: email,
            name: name,
            address: address,
            zip_code: zipCode,
            date: date,
        };

        if(id !== 'new')
            OrderService.edit(data)
                .then(res => {
                    notify.show(res.data, 'success');
                })
                .catch(error => {
                    notify.show(error.response.data.message, 'error');
                });
        else
            OrderService.create(data)
                .then(res => {
                    notify.show(`Order ${id} has been added.`, 'success', 2000);
                    setRedirect(<Redirect to="/admin/orders"/>)
                })
                .catch(error => {
                    notify.show(error.response.data.message, 'error');
                });
    };

    const handleDelete = () => {
        OrderService.delete(order.id)
            .then(res => {
                notify.show(res.data, 'success');
                setRedirect(<Redirect to="/admin/orders"/>)
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    const removeProduct = product => {
        const id = product.id;

        const newProducts = products.filter(product => {
            return product.id !== id;
        });

        setProducts(newProducts);
    };

    const addProduct = product => {
        setProducts([...products, product]);
    };

    return (
        <div className="content">
            {redirect}
            <Row>
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">Order</h2>
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
                                        <label>Customer email</label>
                                        <Input
                                            type="text"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Customer name</label>
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Customer address</label>
                                        <Input
                                            type="text"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Customer zip code</label>
                                        <Input
                                            type="text"
                                            value={zipCode}
                                            onChange={e => setZipCode(e.target.value)}
                                            className={props.bgColor}
                                            required
                                    />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Date</label>
                                        <Input
                                            value={id !== 'new' ? order.created_at : date}
                                            className={props.bgColor}
                                            onChange={e => setDate(e.target.value)}
                                            type={id !== 'new' ? "text" : "datetime-local"}
                                            disabled={id !== 'new'}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Value</label>
                                        <Input
                                            value={id !== 'new' ? order.value : value}
                                            type="number"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Status</label>
                                        <Input
                                            type="select"
                                            value={status}
                                            onChange={e => setStatus(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        >
                                            {statuses}
                                        </Input>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="success" type="submit">
                                    Save
                                </Button>
                                <Button className="btn-fill" color="danger" type="button" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </CardFooter>
                        </Card>
                    </Form>
                </Col>
                <Col md="6">
                    <h2>Products:</h2>
                    {id !== 'new' ?
                        <ProductsListComplex {...props} data={products} bgColor={props.bgColor} remove={removeProduct}/>
                    :
                        <ProductsList
                            {...props}
                            data={productsList}
                            bgColor={props.bgColor}
                            fields={{
                                name: true,
                                price: true,
                            }}
                            products={products}
                            add={addProduct}
                            remove={removeProduct}
                        />
                    }
                </Col>
            </Row>
        </div>
    );
}

export default Order;
