import React from 'react';
import { connect } from 'react-redux';
import { create } from 'logic/projectActions';
import { Container, Typography, Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';
import RadioInput from 'atoms/RadioInput';

const CreateProjects = ({ create, history }) => (
  <Container>
    <Typography
      variant='h6'
      component='h2'
      color='textSecondary'
      gutterBottom
    >
      Create Project
    </Typography>
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: 'work',
        type: 'personal',
      }}
      onSubmit={(values, { resetForm }) => {
        create({ ...values });
        resetForm();
        history.push('/');
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
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  create: (data) => dispatch(create(data)),
});

export default connect(null, mapDispatchToProps)
  (CreateProjects);
