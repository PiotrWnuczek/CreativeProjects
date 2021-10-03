import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Container, Typography } from '@mui/material';

const DetailsProject = ({ project }) => (
  project ? <Container>
    <Card elevation={1}>
      <CardHeader
        title={project.title}
        subheader={project.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {project.description}
        </Typography>
      </CardContent>
    </Card>
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
)(DetailsProject);
