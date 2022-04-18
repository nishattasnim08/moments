import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div className='container w-50 my-5 pt-3'>
            <div>
                <h2>Sign up</h2>
            </div>
            <div className='text-start'>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>First and last name</InputGroup.Text>
                        <FormControl aria-label="First name" />
                        <FormControl aria-label="Last name" />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;