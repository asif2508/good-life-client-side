import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Task from '../Task/Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);
    return (
        <div className='py-5'>
            <Container>
                <Row xs={12} md={6} lg={3} className='gy-3'>
                    {
                        tasks.map(task => <Task
                            task={task}
                        ></Task>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;