import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate('/signin');
    }

    const handleSignUp = event => {
        event.preventDefault();

        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 my-5 pt-3'>
            <div>
                <h2>Sign up</h2>
            </div>
            <div className='text-start'>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <button onClick={() => signInWithGoogle()}>Google Sign In</button>
                </Form>
                <p>Already have an account? <Link to="/signin" className='text-danger pe-auto text-decoration-none' onClick={navigateSignIn}>Sign in</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;