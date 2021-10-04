import React from 'react';
import { connect } from 'react-redux';
import { signup } from 'logic/authActions';
import { Redirect } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';

const SignupForm = ({ signup, error, auth }) => (auth.uid ?
  <Redirect to='/' /> :
  <Container>
    <Typography
      variant='h6'
      component='h2'
      color='textSecondary'
      gutterBottom
    >
      Sign Up
    </Typography>
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstname: '',
        lastname: '',
      }}
      onSubmit={(values, { resetForm }) => {
        signup(values);
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
            value={values.email}
            name='email'
            type='email'
          />
          <TextInput
            onChange={handleChange}
            value={values.password}
            name='password'
            type='password'
          />
          <TextInput
            onChange={handleChange}
            value={values.firstname}
            name='firstname'
            type='text'
          />
          <TextInput
            onChange={handleChange}
            value={values.lastname}
            name='lastname'
            type='text'
          />
          <Button
            type='submit'
            color='secondary'
            variant='contained'
            endIcon={<KeyboardArrowRight />}
          >
            Sign Up
          </Button>
          {error && <p>{error}</p>}
        </form>
      )}
    </Formik>
  </Container>
);

const mapStateToProps = (state) => ({
  error: state.auth.error,
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (SignupForm);
