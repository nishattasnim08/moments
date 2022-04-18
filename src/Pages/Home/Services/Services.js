import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='service'>
            <div className='my-5'>
                <h1>Services</h1>
                <div className='d-flex'>
                {
                    services.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;