import React from 'react';
import { Image } from 'react-bootstrap';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='not-found p-5'>
            <Image src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?t=st=1651881499~exp=1651882099~hmac=326cf7e4f095ea09e69c1907215ff2d2850d78051d4efc737ac6cf1d291902e5&w=740' fluid />
        </div>
    );
};

export default NotFound;