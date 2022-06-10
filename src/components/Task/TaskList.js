import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const TaskList = ({post, handleDeleteItem, handleEdit }) => {
    const { _id, name, desc, completed } = post;
    const data = { completed: true };
    return (
        <Card className='mb-3 mt-4'>
            <Card.Header as="h5">Your Habit</Card.Header>

            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title className='text-start'>{name}</Card.Title>
                    <button onClick={() => handleDeleteItem(_id)} className='main-btn'>
                        <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>

                <Card.Text style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }} className='text-start'>
                    {desc}
                </Card.Text>
                <button onClick={() => handleEdit(_id, data)} className='main-btn ps-4 pe-4'>Edit</button>
            </Card.Body>
        </Card>
    );
};

export default TaskList;