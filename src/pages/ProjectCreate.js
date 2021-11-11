import React from 'react';
import { connect } from 'react-redux';
import { createProject } from 'actions/projectActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';
import SelectInput from 'atoms/SelectInput';

const ProjectCreate = ({ createProject, history }) => (
  <Formik
    initialValues={{
      type: 'personal',
      title: '',
      keywords: '',
      description: '',
    }}
    onSubmit={(values) => {
      createProject({
        ...values,
        keywords: values.keywords.split(' '),
      });
      history.push('/' + values.type);
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
          items={['personal', 'social']}
          name='type'
        />
        <TextInput
          onChange={handleChange}
          value={values.title}
          name='title'
          type='text'
        />
        <TextInput
          onChange={handleChange}
          value={values.keywords}
          name='keywords'
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
