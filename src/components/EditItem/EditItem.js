import { Card, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditItem = () => {
    const { _id } = useParams();
    const [text, setText] = useState('');
    const [searchParams] = useSearchParams();
    const query = searchParams.get('page')
    const navigate = useNavigate();

    const handleInput = e => {
        const habitName = e.target.value;
        setText(habitName);

    }
    const handleEdit = (_id, data, query) => {
        fetch(`https://blooming-meadow-29347.herokuapp.com/${query}/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    response.json();
                    toast.info('Habit edited Successfully!');
                }
                else {
                    toast.error('Failed to edit habit');
                }
            })
            .then((data) => {
                console.log('Success:', data);
            })
    }
    const handleEditConfirm = () => {
        const data = {
            name: text,
        }
        handleEdit(_id, data, query);
    }
    const handleGetBack = () =>{
        navigate(-1);
    }
    return (
        <div className='d-flex justify-content-center '>
            <Card className='w-50 m-5'>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <p className='label-text'>Habit Name</p>
                        <Form.Control onChange={handleInput} name='name' type="text" placeholder="Habit Name" required />
                    </Form.Group>
                    <button className='main-btn' onClick={handleEditConfirm}>
                        Confirm
                    </button>
                    <button onClick={handleGetBack} className='main-btn'>
                       Back
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EditItem;