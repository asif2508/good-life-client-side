import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        fetch('tasks.json')
        .then(res => res.json())
        .then(data => setTasks(data));
    },[]);
    return (
        <div>
            {
                tasks.map(task => <Task
                task ={task}
                ></Task>)
            }
        </div>
    );
};

export default Home;