import { Button, Card, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditModal = () => {
    const {_id} = useParams();
    const [text, setText] = useState('');
    // const navigate = useNavigate();
    // let location = useLocation();
    // let from = location.pathname.split('/')[1];

    const handleInput = e => {
        const habitName = e.target.value;
        setText(habitName);

    }
    const handleEdit = (_id, data) => {
        fetch(`http://localhost:5000/decisions/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if(response.ok){
                response.json();
                toast.info('Habit edited Successfully!');
            }
            else{
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
        handleEdit(_id, data);
    }
    // const handleGetBack = () =>{
    //     navigate(window.history.previous.href);
    //     console.log(from);
    // }
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
                    {/* <button onClick={handleGetBack} className='main-btn'>
                       Back
                    </button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default EditModal;