import React from 'react';
import { connect } from 'react-redux';
import { createProject } from 'logic/projectActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';
import RadioInput from 'atoms/RadioInput';

const ProjectCreate = ({ createProject, history }) => (
  <Formik
    initialValues={{
      title: '',
      description: '',
      category: 'work',
      type: 'personal',
    }}
    onSubmit={(values) => {
      createProject({ ...values });
      history.push('/' + values.type);
    }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <TextInput
          onChange={handleChange}
          value={values.title}
          name='title'
          type='text'
        />
        <TextInput
          onChange={handleChange}
          value={values.description}
          name='description'
          type='text'
          rows={7}
          multiline
        />
        <RadioInput
          onChange={handleChange}
          value={values.category}
          items={['work', 'life']}
          name='category'
        />
        <RadioInput
          onChange={handleChange}
          value={values.type}
          items={['personal', 'social']}
          name='type'
        />
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Create Project
        </Button>
      </form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  createProject: (data) => dispatch(createProject(data)),
});

export default connect(null, mapDispatchToProps)
  (ProjectCreate);
