import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Masonry from 'react-masonry-css';
import ProjectCard from 'moleculs/ProjectCard';

const SocialProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/projects/' + id, {
      method: 'DELETE'
    })
    setProjects(projects.filter(project => project.id !== id))
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
        {projects.map(project => (
          <div key={project.id}>
            <ProjectCard project={project} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
};

export default SocialProjects;
