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
import {notify} from 'react-notify-toast';
import UserService from "../../utils/UserService";
import OrdersList from "../../components/admin/OrdersList";

function User(props) {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [redirect, setRedirect] = useState();

    useEffect(() => {
        (async function() {
            const user = await UserService.get(props.match.params.id);
            setUser(user);
            setName(user.name);
            setEmail(user.email);
            setCountry(user.country.id);
        })();

        (async function() {
            const countries = await window.axios.get('/api/countries');

            const options =  countries.data.map((country) => {
                return <option key={country.id} value={country.id}>{country.name}</option>
            });

            setCountries(options);
        })();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: user.id,
            name: name,
            email: email,
            country: country,
        };

        UserService.edit(data)
            .then(res => {
                notify.show(res.data, 'success');
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    const handleDelete = () => {
        UserService.delete(user.id)
            .then(res => {
                notify.show(res.data, 'success');
                setRedirect(<Redirect to="/admin/users"/>)
            })
            .catch(error => {
                notify.show(error.response.data.message, 'error');
            });
    };

    return (
        <div className="content">
            {redirect}
            <Row>
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">User</h2>
                                {/*<h5 className="card-category">ID: {user.id}</h5>*/}
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <label>ID</label>
                                        <Input
                                            defaultValue={user.id}
                                            type="text"
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Name</label>
                                        <Input
                                            defaultValue={user.name}
                                            type="text"
                                            onChange={e => setName(e.target.value)}
                                            className={props.bgColor}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Email</label>
                                        <Input
                                            defaultValue={user.email}
                                            type="email"
                                            onChange={e => setEmail(e.target.value)}
                                            className={props.bgColor}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <label>Country</label>
                                        <Input
                                            type="select"
                                            value={country}
                                            onChange={e => setCountry(e.target.value)}
                                            className={props.bgColor}
                                        >
                                            {countries}
                                        </Input>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color={props.bgColor} type="submit">
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
                    <Card>
                        <CardHeader tag="h2">
                            User orders
                        </CardHeader>
                        <CardBody>
                            <OrdersList
                                data={user.orders}
                                bgColor={props.bgColor}
                                fields={{
                                    index: true,
                                    date: true,
                                    status: true,
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default User;
