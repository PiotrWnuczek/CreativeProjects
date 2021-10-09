import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Box } from '@mui/material';
import ProjectsGrid from 'organisms/ProjectsGrid';

const SocialProjects = ({ social }) => (
  <Box>
    <ProjectsGrid projects={social} type='social' />
  </Box>
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
