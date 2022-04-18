import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { id, name, price, image, about } = service;
    return (
        <div className='container d-flex w-25 my-3 service'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body className='bg-danger bg-opacity-10 border-0'>
                        <Card.Title>
                            <h4 className='fs-4'>{name}</h4>
                        </Card.Title>
                        <Card.Text>
                            {about}
                            <h5 className='pt-3 fs-5'>Price: {price}</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer  className='bg-danger bg-opacity-10 border-0 p-0'>
                        <button onClick={() => navigate(`/service/${name}`)}>Book Now</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;