import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Task = ({ task }) => {
    const { name, img } = task;
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <button className='btn-style'>Get Started</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Task;