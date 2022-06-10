import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TaskList = ({post, handleDeleteItem,page}) => {
    const {_id, name} = post
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
                <Link to={`/edit/${_id}?page=${page}`} className='main-btn ps-4 pe-4'>Edit</Link>
            </Card.Body>
        </Card>
    );
};

export default TaskList;