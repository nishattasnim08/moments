import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceCheckOut = () => {
    const para = useParams()
    return (
        <div>
            <div>
                <h2>Checkout: {para.serviceId}</h2>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ServiceCheckOut;