import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container } from '@mui/material';
import ProjectsGrid from 'organisms/ProjectsGrid';

const PersonalProjects = ({ personal }) => (
  <Container>
    <ProjectsGrid projects={personal} type='personal' />
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
