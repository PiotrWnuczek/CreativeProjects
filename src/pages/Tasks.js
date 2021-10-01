import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Masonry from 'react-masonry-css';
import Task from 'blocks/Task';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/tasks/' + id, {
      method: 'DELETE'
    })
    setTasks(tasks.filter(task => task.id !== id))
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {tasks.map(task => (
          <div key={task.id}>
            <Task task={task} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
};

export default Tasks;
