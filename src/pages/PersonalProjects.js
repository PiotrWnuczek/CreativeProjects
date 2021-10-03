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

const PersonalProjects = ({ personal }) => (
  <Container>
    <Masonry
      breakpointCols={breakpoints}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {personal && personal.map(project =>
        <StyledLink
          to={'/personal/' + project.id}
          key={project.id}
        >
          <ProjectCard project={project} />
        </StyledLink>
      )}
    </Masonry>
  </Container>
);

const mapStateToProps = (state) => ({
  personal: state.firestore.ordered.personal,
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'users', doc: props.auth.uid,
      subcollections: [{ collection: 'projects' }],
      orderBy: ['createdat', 'desc'],
      storeAs: 'personal',
    },
  ]),
)(PersonalProjects);
