import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import nishat from '../../images/about/nishat.png'

const About = () => {
    return (
        <div className='my-5 pt-3'>
            <div>
                <h1>About Me</h1>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className='text-start p-5'>
                            <h1>Nishat Tasnim</h1>
                            <p>As a potential junior Web developer, I want to be able to create Web sites that successfully present information, enable interaction, and are visually appealing to users. To do so, I'll need to be familiar with the intricacies of Web design and delivery, as well as the many tools and software programs available.<br />
                                I need to be able to put the information together in a way that my audience can understand.</p>
                        </Col>
                        <Col><img src={nishat} alt=""  className='w-50 m-3' /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;