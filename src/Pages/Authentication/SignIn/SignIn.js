import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignIn = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }

const navigateSignUp = event => {
navigate('/signup');
}

    return (
        <div className='container my-5 w-50'>
            <div className='pt-3'>
                <h2>Sign In</h2>
            </div>
            <div className='text-start'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                    <button onClick={() => signInWithGoogle()}>Google Sign In</button>
                </Form>
                <p>Do not have an account? <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateSignUp}>Create an Account</Link> </p>
            </div>
        </div>
    );
};

export default SignIn;