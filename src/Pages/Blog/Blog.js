import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-5'>
            <div className='py-3'>
                <h1>Blog</h1>
            </div>
            <div className='container w-75 text-start'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between Authorization and Authentication</Accordion.Header>
                        <Accordion.Body>
                            Authentication refers to the process of verifying your identity by confirming your credentials, such as your User Name/User ID and password. Using your credentials, the system checks if you are who you claim you are. The system uses login passwords to verify a user's identification in both public and private networks. Authentication is normally done with a login and password, but it may also be done with factors of authentication, which refers to several methods to be verified.
                            <br />
                            Authorization, on the other hand, comes when the system successfully authenticates your identity, granting you complete access to resources such as information, files, databases, finances, places, and nearly anything else. Simply put, authorisation decides whether and to what degree you may use the system.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using Firebase? What other options do you have to implement Authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase Analytics provides incontrovertible data about user activity. You can use this information to make more educated decisions about how to effectively advertise your app and reach out to the people you want to reach. The unique capabilities it provides also enable you to assess the efficacy of your campaigns across organic and paid channels in order to determine which approaches are more effective for the specific individuals you want to reach.
                            <br />
                            Let's start with a list of the many methods for achieving authentication.
                            <ul>
                                <li>Cookie-Based authentication</li>
                                <li>Token-Based authentication</li>
                                <li>Third party access(OAuth, API-token)</li>
                                <li>OpenId</li>
                                <li>SAML</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                        <Accordion.Body>
                            Firebase is a complete solution that may help you construct mobile or web applications faster and more efficiently with less resources. Let's take a look at some of the services other than authentication,
                            <br />
                            <ul>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                                <li>Google Analytics</li>
                                <li>Predictions</li>
                                <li>Cloud Messaging</li>
                                <li>Dynamic Links</li>
                                <li>Remote Config</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;