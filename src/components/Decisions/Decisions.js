import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import TaskList from '../Task/TaskList';
import './Decisions.css';
const Decisions = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://powerful-reef-30073.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])

    const handleAddTask = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const desc = event.target.desc.value;
        const data = {
            name: name,
            desc: desc,
            completed: false
        };
        fetch('https://powerful-reef-30073.herokuapp.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();
    }
    const handleDeleteItem = id => {
        const url = `https://powerful-reef-30073.herokuapp.com/posts/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleEdit = (id, data) => {
        fetch(`https://powerful-reef-30073.herokuapp.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
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
                                handleEdit={handleEdit}
                            ></TaskList>)
                        }
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <div className='adding-task'>
                            <h3>Add a New Habit</h3>
                            <form onSubmit={handleAddTask}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <p className='label-text'>Habit Name</p>
                                    <Form.Control name='name' type="text" placeholder="Habit Name" />
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

export default Decisions;