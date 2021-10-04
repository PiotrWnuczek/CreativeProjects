import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import ProjectCard from 'moleculs/ProjectCard';

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const ProjectsGrid = ({ projects, type }) => (
  <Masonry
    breakpointCols={breakpoints}
    className='my-masonry-grid'
    columnClassName='my-masonry-grid_column'
  >
    {projects && projects.map(project =>
      <StyledLink
        to={'/' + type + '/' + project.id}
        key={project.id}
      >
        <ProjectCard project={project} />
      </StyledLink>
    )}
  </Masonry>
);

export default ProjectsGrid;
