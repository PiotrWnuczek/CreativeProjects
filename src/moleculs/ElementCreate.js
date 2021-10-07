import React from 'react';
import { connect } from 'react-redux';
import { createElement } from 'logic/elementActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';
import SelectInput from 'atoms/SelectInput';

const ElementCreate = ({ createElement, type, projectid }) => (
  <Formik
    initialValues={{
      content: '',
      item: 'note',
    }}
    onSubmit={(values, { resetForm }) => {
      createElement({ ...values, type }, projectid);
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
          items={['note', 'task', 'file']}
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
);

const mapDispatchToProps = (dispatch) => ({
  createElement: (data, projectid) =>
    dispatch(createElement(data, projectid)),
});

export default connect(null, mapDispatchToProps)
  (ElementCreate);
