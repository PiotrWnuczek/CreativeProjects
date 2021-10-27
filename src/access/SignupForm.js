import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from 'actions/profileActions';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';

const SignupForm = ({ signUp, error, auth }) => {
  const [mistake, setMistake] = useState(false);

  return (auth.uid ?
    <Redirect to='/profile' /> :
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirm: '',
      }}
      onSubmit={(values) => {
        if (values.password === values.confirm) {
          signUp({
            name: values.name,
            email: values.email,
            password: values.password,
          });
        } else { setMistake(true) }
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextInput
            onChange={handleChange}
            value={values.name}
            name='name'
            type='text'
          />
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
            value={values.confirm}
            name='confirm'
            type='password'
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
          {mistake && <p>Passowrds are not identical</p>}
        </form>
      )}
    </Formik>
  )
};

const mapStateToProps = (state) => ({
  error: state.profile.error,
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (SignupForm);
