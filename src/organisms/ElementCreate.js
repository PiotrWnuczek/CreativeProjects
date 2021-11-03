import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createElement } from 'actions/elementActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';

const ElementCreate = ({ createElement, type, projectid }) => {
  const [file, setFile] = useState(null);
  const [task, setTask] = useState(false);

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
      }}
      onSubmit={(values, { resetForm }) => {
        createElement({ ...values, type }, file, projectid);
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
          <TextInput
            onChange={handleChange}
            value={values.description}
            name='description'
            type='text'
            rows={2}
            multiline
          />
          <Button
            onClick={() => setTask(!task)}
            variant={task ? 'contained' : 'outlined'}
            color='secondary'
            sx={{ mr: 2 }}
          >
            Task
          </Button>
          <Button
            variant={file ? 'contained' : 'outlined'}
            color='secondary'
            component='label'
            sx={{ mr: 2 }}
          >
            {file ? file.name : 'File'}
            <input hidden
              type='file'
              onChange={e => setFile(e.target.files[0])}
            />
          </Button>
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
  )
};

const mapDispatchToProps = (dispatch) => ({
  createElement: (data, file, projectid) =>
    dispatch(createElement(data, file, projectid)),
});

export default connect(null, mapDispatchToProps)
  (ElementCreate);
