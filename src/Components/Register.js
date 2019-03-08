import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends Component
{
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            registered: false,
            errors: {
                name: '',
                email: '',
                password: ''
            }
        }

        this.register = this.register.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    register() {
        this.setState({ errors: {
            name: '',
            email: '',
            password: ''
        }});

        fetch('http://api.react-press.test/register', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then((response) => {
            response
                .json()
                .then(data => {
                    if (data.errors) {
                        this.setState({ errors: data.errors });
                    } else if (data.message) {
                        this.setState({ registered: true });
                    }
                });
        });

        return false;
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
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
                <h3 className="mb-3">Register</h3>
                <Alert color="success" isOpen={this.state.registered}>
                    Registration successful. <Link to="/login">Login</Link>
                </Alert>
                <Form className={this.state.registered ? 'd-none' : ''}>
                    <FormGroup>
                        <Input type="text" name="name" placeholder="Name" onChange={this.handleNameChange} />
                        <div className={ 'invalid-feedback' + (this.state.errors.name != '' ? ' d-block' : '') }>
                            { this.state.errors.name }
                        </div>
                    </FormGroup>
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
                        <Button color="primary" block onClick={this.register}>Register</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Register;