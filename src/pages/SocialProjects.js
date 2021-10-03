import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
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

const SocialProjects = ({ social }) => (
  <Container>
    <Masonry
      breakpointCols={breakpoints}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {social && social.map(project => (
        <StyledLink
          to={'/social/' + project.id}
          key={project.id}
        >
          <ProjectCard project={project} />
        </StyledLink>
      ))}
    </Masonry>
  </Container>
);

const mapStateToProps = (state) => ({
  social: state.firestore.ordered.social,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects',
      orderBy: ['createdat', 'desc'],
      storeAs: 'social',
    },
  ]),
)(SocialProjects);
