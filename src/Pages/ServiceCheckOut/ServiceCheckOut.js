import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceCheckOut = () => {
    const para = useParams();

    const handleCheckOut = event => {
        event.preventDefault();
    }

    return (
        <div className='container my-5 pt-3 w-50'>
            <div>
                <h2>Checkout : {para.serviceId}</h2>
            </div>
            <div>
                <div className='text-start'>
                    <Form onSubmit={handleCheckOut}>
                    <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control type="text" placeholder="Enter Venue" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Label>Date & Time</Form.Label>
                            <Form.Control type="text" placeholder="Enter Date & Time" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Confirm Booking
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ServiceCheckOut;