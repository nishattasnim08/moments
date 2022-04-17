import React from 'react';
import notFoundImage from '../../images/404-Error.png'

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;