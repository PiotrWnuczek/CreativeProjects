import React from 'react';
import { connect } from 'react-redux';
import { signin } from 'logic/authActions';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';

const SigninForm = ({ signin, error, auth }) => (auth.uid ?
  <Redirect to='/profile' /> :
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={(values) => {
      signin(values);
    }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit} >
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
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Sign In
        </Button>
        {error && <p>{error}</p>}
      </form>
    )}
  </Formik>
);

const mapStateToProps = (state) => ({
  error: state.auth.error,
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signin: (creds) => dispatch(signin(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (SigninForm);
