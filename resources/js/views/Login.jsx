import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Menu from '../components/Menu';
import {Form, FormInput, FormGroup, Button, Alert} from "shards-react";
import ReeValidate from 'ree-validate';
import Api from '../utils/Api';
import {AuthContext} from "../utils/AuthContext";

export default function Login(){

    const { state, dispatch } = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [redirectToAdmin, setRedirectToAdmin] = useState(false);

    const validator = new ReeValidate({
        email: 'required|email',
        password: 'required',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        validator.validateAll(credentials)
            .then((success) => {
                setLoading(true);

                success && Api.login(credentials)
                    .then(res => {
                        Api.getUser().then( res => {
                            res.data.name === 'admin' && setRedirectToAdmin(true);
                            dispatch({ type: "login", payload: res.data });
                            setErrors({});
                            setLoading(false);
                        });
                    })
                    .catch(error => {
                        setErrors(error.response);
                        setLoading(false);
                    })
            });
    };

    return redirectToAdmin ?
        <Redirect to="/admin"/>
        :
        state.authenticated
            ?
            <Redirect to="/"/>
            :
            (
                <div className="content">
                    <Helmet>
                        <title>Shop | Login</title>
                    </Helmet>
                    <Menu/>
                    <Form method="POST" onSubmit={handleSubmit}>
                        {errors.data
                        && (
                            <Alert theme="danger">
                                {errors.data}
                            </Alert>
                        )}
                        <FormGroup>
                            <label htmlFor="#email">Email</label>
                            <FormInput invalid={!!errors.data} type="email" id="#email" name="email" onChange={handleChange} disabled={loading} required/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#password">Password</label>
                            <FormInput invalid={!!errors.data} type="password" id="#password" name="password" onChange={handleChange} disabled={loading} required/>
                        </FormGroup>
                        <Button>Log in</Button>
                    </Form>
                </div>
            )
}