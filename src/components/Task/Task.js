import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
    const { name, img, path } = task;
    return (
        <Col  xs={12} sm={12} md={6} lg={4}>
            <Card>
                <Card.Img variant="top" height={250} src={img} />
                <Card.Body>
                    <h5 className='mb-3'>{name}</h5>
                    <Link to={path} className='btn-style mt-3'>Get Started</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Task;