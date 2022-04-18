import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='my-5 pt-3'>
            <div>
                <h1>About Me</h1>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h1>Nishat Tasnim</h1>
                        <p></p>
                        </Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;