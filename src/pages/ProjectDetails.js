import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createElement } from 'logic/elementActions';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid, Button, Box } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Formik } from 'formik';
import DetailsCard from 'moleculs/DetailsCard';
import DetailsGrid from 'organisms/DetailsGrid';
import TextInput from 'atoms/TextInput';
import SelectInput from 'atoms/SelectInput';

const ProjectDetails = ({ project, id, elements, createElement }) => (project ?
  <Grid container spacing={3}>
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
          createElement({ ...values, type: project.type }, id);
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
      <Box sx={{ mt: 4 }}>
        <DetailsGrid elements={elements} />
      </Box>
    </Grid>
  </Grid> :
  <p className='text-center'>loading...</p>
);

const mapStateToProps = (state, ownProps) => {
  const type = ownProps.match.params.type;
  const id = ownProps.match.params.id;
  const personalProjects = state.firestore.data.personalProjects;
  const socialProjects = state.firestore.data.socialProjects;
  const personalElements = state.firestore.ordered.personalElements;
  const socialElements = state.firestore.ordered.socialElements;
  if (type === 'personal') {
    return {
      auth: state.firebase.auth, id,
      project: personalProjects && personalProjects[id],
      elements: personalElements,
    }
  } else {
    return {
      auth: state.firebase.auth, id,
      project: socialProjects && socialProjects[id],
      elements: socialElements,
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  createElement: (data, projectid) => dispatch(createElement(data, projectid)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
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
