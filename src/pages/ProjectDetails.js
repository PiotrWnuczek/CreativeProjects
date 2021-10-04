import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container } from '@mui/material';
import DetailsCard from 'moleculs/DetailsCard';
import DetailsGrid from 'organisms/DetailsGrid';

const ProjectDetails = ({ project }) => (
  project ? <Container>
    <DetailsCard details={project} />
    <DetailsGrid elements={[]} />
  </Container> : <p className='text-center'>loading...</p>
);

const mapStateToProps = (state, ownProps) => {
  const type = ownProps.match.params.type;
  const id = ownProps.match.params.id;
  const personal = state.firestore.data.personal;
  const social = state.firestore.data.social;
  if (type === 'personal') {
    return {
      auth: state.firebase.auth,
      project: personal && personal[id],
    }
  } else {
    return {
      auth: state.firebase.auth,
      project: social && social[id],
    }
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'users', doc: props.auth.uid,
      subcollections: [{ collection: 'projects' }],
      storeAs: 'personal',
    },
    {
      collection: 'projects',
      storeAs: 'social',
    },
  ]),
)(ProjectDetails);
