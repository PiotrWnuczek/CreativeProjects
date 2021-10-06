import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { create } from 'logic/projectActions';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid, Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Formik } from 'formik';
import DetailsCard from 'moleculs/DetailsCard';
import DetailsGrid from 'organisms/DetailsGrid';
import TextInput from 'atoms/TextInput';
import SelectInput from 'atoms/SelectInput';

const ProjectDetails = ({ project }) => (
  project ? <Grid container spacing={3}>
    <Grid item md={3}>
      <DetailsCard details={project} />
    </Grid>
    <Grid item md={9}>
      <Formik
        initialValues={{
          content: '',
          type: 'note',
        }}
        onSubmit={(values, { resetForm }) => {
          create({ ...values });
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <SelectInput
              onChange={handleChange}
              value={values.type}
              items={['note', 'task', 'file']}
              name='type'
            />
            <TextInput
              onChange={handleChange}
              value={values.content}
              name='content'
              type='text'
              rows={3}
              multiline
            />
            <Button
              type='submit'
              color='secondary'
              variant='contained'
              endIcon={<KeyboardArrowRight />}
            >
              Add Element
            </Button>
          </form>
        )}
      </Formik>
      <DetailsGrid elements={[]} />
    </Grid>
  </Grid> : <p className='text-center'>loading...</p>
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
