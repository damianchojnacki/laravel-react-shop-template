import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
// reactstrap components
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Row} from "reactstrap";
import {notify} from 'react-notify-toast';
import UserService from "../../utils/services/UserService";
import OrdersList from "../../components/admin/OrdersList";

function User(props) {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState();
    const id = props.match.params.id;

    useEffect(() => {
        (async function() {
            if(id !== 'new'){
                const user = await UserService.get(id);
                setUser(user);
                setName(user.name);
                setEmail(user.email);
            }
        })();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: id,
            name: name,
            email: email,
            password: password,
        };

        if(id !== 'new')
            UserService.edit(data)
                .then(res => {
                    notify.show(res.data, 'success');
                })
                .catch(error => {
                    notify.show(error.response.data.message, 'error');
                });
        else
            UserService.create(data)
                .then(res => {
                    notify.show(`${name} has been added.`, 'success');
                    setRedirect(<Redirect to={`/admin/users/${res.data}`}/>)
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
                <Col md={id !== 'new' ? 6 : 12}>
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h2 className="card-title">User</h2>
                                {/*<h5 className="card-category">ID: {user.id}</h5>*/}
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
                                            defaultValue={user.name}
                                            type="text"
                                            onChange={e => setName(e.target.value)}
                                            className={props.bgColor}
                                            required
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
                                            required
                                        />
                                    </Col>
                                </Row>
                                {id === 'new' &&
                                <Row>
                                    <Col md="12">
                                        <label>Password</label>
                                        <Input
                                            type="text"
                                            onChange={e => setPassword(e.target.value)}
                                            className={props.bgColor}
                                            required
                                        />
                                    </Col>
                                </Row>
                                }
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
                {id !== 'new' &&
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
                }
            </Row>
        </div>
    );
}

export default User;
