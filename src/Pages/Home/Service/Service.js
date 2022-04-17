import React from 'react';

const Service = ({service}) => {
    const {id,name,price,image,about} = service;
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default Service;