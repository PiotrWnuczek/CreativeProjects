import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from 'logic/projectActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';

const DetailsEdit = ({ value, type, id, setEdit, updateProject }) => (
  <Formik
    initialValues={{
      title: value,
    }}
    onSubmit={(values, { resetForm }) => {
      updateProject({ ...values, type }, id);
      setEdit(false);
      resetForm();
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
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Save
        </Button>
      </form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (DetailsEdit);
