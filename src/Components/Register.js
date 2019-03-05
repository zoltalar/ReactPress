import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Register extends Component
{
    render() {
        return (
            <div>
                <h3 className="mb-3">Register</h3>
                <Form>
                    <FormGroup>
                        <Input type="text" name="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" block>Register</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Register;