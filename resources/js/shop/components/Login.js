import React from 'react';
import {Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Menu from './Menu';
import {Form, FormInput, FormGroup, Button, Alert} from "shards-react";
import ReeValidate from 'ree-validate';
import {getUser, login, isAuthenticated} from '../utils/auth';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.validator = new ReeValidate({
            email: 'required|email',
            password: 'required',
        });

        this.state = {
            loading: false,
            email: '',
            password: '',
            errors: {},
            response: {
                error: false,
                message: '',
            },
            redirectToAdmin: false,
            logged: props.logged,
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

        // If a field has a validation error, we'll clear it when corrected.
        const {errors} = this.state;
        if (name in errors) {
            const validation = this.validator.errors;
            this.validator.validate(name, value).then(() => {
                if (!validation.has(name)) {
                    delete errors[name];
                    this.setState({errors});
                }
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const credentials = {
            email,
            password,
        };

        this.validator.validateAll(credentials)
            .then((success) => {
                this.setState({
                    loading: true
                });

                success && login(credentials)
                    .then(res => {
                        getUser().then(res => {
                            res.data.name === 'admin' && this.setState({redirectToAdmin: true});
                            this.setState({
                                errors: {},
                                logged: true,
                            });
                        });
                    })
                    .catch(error => {
                        this.setState({
                            errors: error.response,
                            loading: false
                        });
                    })
            });
    };

    render() {
        return this.state.redirectToAdmin ?
            window.location.assign(`${window.location.origin.toString()}/admin`)
            :
            this.state.logged || isAuthenticated()
                ?
                <Redirect to="/"/>
                :
                (
                    <div className="content">
                        <Helmet>
                            <title>Shop | Login</title>
                        </Helmet>
                        <Menu/>
                        <Form method="POST" onSubmit={this.handleSubmit}>
                            {this.state.errors.data
                            && (
                                <Alert theme="danger">
                                    {this.state.errors.data}
                                </Alert>
                            )}
                            <FormGroup>
                                <label htmlFor="#email">Email</label>
                                <FormInput invalid={!!this.state.errors.data} type="email" id="#email" name="email" onChange={this.handleChange} disabled={this.loading}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">Password</label>
                                <FormInput invalid={!!this.state.errors.data} type="password" id="#password" name="password" onChange={this.handleChange} disabled={this.loading}/>
                            </FormGroup>
                            <Button>Log in</Button>
                        </Form>
                    </div>
                )
    }
}

export default Login;
