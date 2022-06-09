import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Banner = () => {
    return (
        <div className='home-page'>
            <Container>
                <div className='text-center p-5 banner'>
                    <h1 className='fw-bolder'>Improve Yourself and Your Life Style</h1>
                    <p>To make your daily life more ogranized and routined, We have come with a great tool. It will help you to maintain your life more easily. Do your works on time.</p>
                    <Link to='/login' className='btn-style'><span className='me-1'>Login</span> <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></Link>
                </div>
            </Container>
        </div>
    );
};

export default Banner;