import React from 'react';
import Masonry from 'react-masonry-css';
import ProjectCard from 'moleculs/ProjectCard';

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const ProjectsGrid = ({ projects }) => (
  <Masonry
    breakpointCols={breakpoints}
    className='my-masonry-grid'
    columnClassName='my-masonry-grid_column'
  >
    {projects && projects.map(project =>
      <ProjectCard key={project.id} project={project} />
    )}
  </Masonry>
);

export default ProjectsGrid;
