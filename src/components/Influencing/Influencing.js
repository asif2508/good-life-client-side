import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import TaskList from '../Task/TaskList';

const Influencing = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/influencing')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])

    const handleAddTask = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const data = {
            name: name,
        };
        fetch('http://localhost:5000/influencing', {
            method: 'POST',
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
                    toast.error('Failed to add habit');
                }
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();
    }
    const handleDeleteItem = id => {
        const url = `http://localhost:5000/influencing/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
        .then(response => {
            if(response.ok){
                response.json();
                toast.error('Habit deleted Successfully!');
            }
            else{
                toast.error('Failed to delete habit');
            }
        })
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <Container>
                <Row className='gy-5'>
                    <Col xs={12} md={7} lg={7}>
                        {
                            posts.map(post => <TaskList
                                key={post._id}
                                post={post}
                                handleDeleteItem={handleDeleteItem}
                                page={`influencing`}
                            ></TaskList>)
                        }
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <div className='adding-task'>
                            <h3>Add a New Habit</h3>
                            <form onSubmit={handleAddTask}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <p className='label-text'>Habit Name</p>
                                    <Form.Control name='name' type="text" placeholder="Habit Name" required/>
                                </Form.Group>
                                <input type="submit" value="ADD" className='btn main-btn w-25' />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Influencing;