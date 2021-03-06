import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from '@mui/material';
import DetailsCard from 'moleculs/DetailsCard';
import ElementCreate from 'organisms/ElementCreate';
import ElementsGrid from 'organisms/ElementsGrid';

const ProjectDetails = ({ project, id, profile, elements }) => (
  project && project.team.some(i =>
    i.email === profile.email && (i.role === 'member' || i.role === 'admin')
  ) ? <Grid container spacing={3}>
    <Grid item md={3}>
      <DetailsCard
        details={project}
        id={id}
      />
    </Grid>
    <Grid item md={9}>
      <ElementCreate
        type={project.type}
        projectid={id}
      />
      <ElementsGrid
        elements={elements}
        projectid={id}
      />
    </Grid>
  </Grid> : <p className='text-center'>loading...</p>
);

const mapStateToProps = (state, ownProps) => {
  const profile = state.firebase.profile;
  const type = ownProps.match.params.type;
  const id = ownProps.match.params.id;
  const personalProjects = state.firestore.data.personalProjects;
  const socialProjects = state.firestore.data.socialProjects;
  const personalElements = state.firestore.ordered.personalElements;
  const socialElements = state.firestore.ordered.socialElements;
  if (type === 'personal') {
    return {
      auth: state.firebase.auth,
      project: personalProjects && personalProjects[id],
      elements: personalElements,
      id, profile,
    }
  } else {
    return {
      auth: state.firebase.auth,
      project: socialProjects && socialProjects[id],
      elements: socialElements,
      id, profile,
    }
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'users',
      doc: props.auth.uid,
      subcollections: [{
        collection: 'projects',
      }],
      storeAs: 'personalProjects',
    },
    {
      collection: 'projects',
      storeAs: 'socialProjects',
    },
    {
      collection: 'users',
      doc: props.auth.uid,
      subcollections: [{
        collection: 'projects',
        doc: props.id,
      }, {
        collection: 'elements',
      }],
      orderBy: ['createdat', 'desc'],
      storeAs: 'personalElements',
    },
    {
      collection: 'projects',
      doc: props.id,
      subcollections: [{
        collection: 'elements',
      }],
      orderBy: ['createdat', 'desc'],
      storeAs: 'socialElements',
    },
  ]),
)(ProjectDetails);
