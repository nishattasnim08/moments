import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
const navigateSignIn = () =>{
    navigate('/signin');
}

const handleSignUp = event =>{
    event.preventDefault();
}

    return (
        <div className='container w-50 my-5 pt-3'>
            <div>
                <h2>Sign up</h2>
            </div>
            <div className='text-start'>
                <Form onSubmit={handleSignUp}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>First and last name</InputGroup.Text>
                        <FormControl aria-label="First name" />
                        <FormControl aria-label="Last name" />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p>Already have an account? <Link to="/signin" className='text-danger pe-auto text-decoration-none' onClick={navigateSignIn}>Sign in</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;