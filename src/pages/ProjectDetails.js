import React from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid, Box } from '@mui/material';
import DetailsCard from 'moleculs/DetailsCard';
import DetailsGrid from 'organisms/DetailsGrid';
import ElementCreate from 'moleculs/ElementCreate';

const ProjectDetails = ({ project, id, profile, elements }) => (project ?
  !project.team.includes(profile.email) ? <Redirect to={'/' + project.type} /> :
    <Grid container spacing={3}>
      <Grid item md={3}>
        <DetailsCard details={project} id={id} />
      </Grid>
      <Grid item md={9}>
        <ElementCreate type={project.type} projectid={id} />
        <Box sx={{ mt: 4 }}>
          <DetailsGrid elements={elements} projectid={id} />
        </Box>
      </Grid>
    </Grid> :
  <p className='text-center'>loading...</p>
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
      storeAs: 'personalElements',
    },
    {
      collection: 'projects',
      doc: props.id,
      subcollections: [{
        collection: 'elements',
      }],
      storeAs: 'socialElements',
    },
  ]),
)(ProjectDetails);
