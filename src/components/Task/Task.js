import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
    const { name, img, path } = task;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" height={250} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={path} className='btn-style'>Get Started</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Task;