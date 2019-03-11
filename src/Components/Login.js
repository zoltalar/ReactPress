import React, { Component } from 'react';
import {Alert, Button, Form, FormGroup, Input} from 'reactstrap';
import {Link} from "react-router-dom";

class Login extends Component
{
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errored: false,
            errors: {
                email: '',
                password: ''
            }
        }

        this.login = this.login.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    login() {
        this.setState({ errors: {
            email: '',
            password: ''
        }});

        fetch('http://api.react-press.test/token', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => {
                response
                    .json()
                    .then(data => {
                        if (data.message) {
                            this.setState({ errored: true })
                        }
                    });
            });

        return false;
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <h3 className="mb-3">Login</h3>
                <Alert color="danger" isOpen={this.state.errored}>
                    Login error.
                </Alert>
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Email" onChange={this.handleEmailChange} />
                        <div className={ 'invalid-feedback' + (this.state.errors.email != '' ? ' d-block' : '') }>
                            { this.state.errors.email }
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
                        <div className={ 'invalid-feedback' + (this.state.errors.password != '' ? ' d-block' : '') }>
                            { this.state.errors.password }
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" block onClick={this.login}>Login</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;