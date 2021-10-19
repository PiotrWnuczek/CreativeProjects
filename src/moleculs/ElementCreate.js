import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createElement } from 'logic/elementActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';
import SelectInput from 'atoms/SelectInput';

const ElementCreate = ({ createElement, type, projectid }) => {
  const [file, setFile] = useState(null);

  return (
    <Formik
      initialValues={{
        item: 'note',
        content: '',
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
          <SelectInput
            onChange={handleChange}
            value={values.item}
            items={['note', 'task', 'image', 'file']}
            name='item'
          />
          <TextInput
            onChange={handleChange}
            value={values.content}
            name='content'
            type='text'
            rows={3}
            multiline
          />
          {(values.item === 'file' || values.item === 'image') && <Button
            color='secondary'
            variant='contained'
            component='label'
            sx={{ mr: 2 }}
          >
            Upload ({file ? file.name : 'choose file'})
            <input hidden
              type='file'
              onChange={e => setFile(e.target.files[0])}
            />
          </Button>}
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
