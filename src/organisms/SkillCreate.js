import React from 'react';
import { connect } from 'react-redux';
import { createSkill } from 'actions/skillActions';
import { createKeyword } from 'actions/keywordActions';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';

const SkillCreate = ({ createSkill, createKeyword }) => (
  <Formik
    initialValues={{
      title: '',
      description: '',
    }}
    onSubmit={(values, { resetForm }) => {
      createSkill({ ...values });
      createKeyword({
        word: values.title, quantity: 1
      });
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
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Add Skill
        </Button>
      </form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  createSkill: (data) => dispatch(createSkill(data)),
  createKeyword: (data) => dispatch(createKeyword(data)),
});

export default connect(null, mapDispatchToProps)
  (SkillCreate);
