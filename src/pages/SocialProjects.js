import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProjectsGrid from 'organisms/ProjectsGrid';

const SocialProjects = ({ social }) => (
  <ProjectsGrid
    projects={social}
    type='social'
  />
);

const mapStateToProps = (state) => ({
  social: state.firestore.ordered.social,
  profile: state.firebase.profile,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'projects',
      where: [['team', 'array-contains', { email: 'piotrantoniwnuczek@gmail.com', role: 'admin' }]],
      orderBy: ['createdat', 'desc'],
      storeAs: 'social',
    },
  ]),
)(SocialProjects);
