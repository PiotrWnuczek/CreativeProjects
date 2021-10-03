import React from 'react';
import { connect } from 'react-redux';
import { signup } from 'logic/authActions';
import { Redirect } from 'react-router-dom';
import { Container, Typography, Button, TextField } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Formik } from 'formik';

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
          <TextField
            sx={{ mt: 2, mb: 2, display: 'block' }}
            onChange={handleChange}
            value={values.email}
            label='Email'
            type='email'
            name='email'
            placeholder='email'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 2, mb: 2, display: 'block' }}
            onChange={handleChange}
            value={values.password}
            label='Password'
            type='password'
            name='password'
            placeholder='password'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 2, mb: 2, display: 'block' }}
            onChange={handleChange}
            value={values.firstname}
            label='First Name'
            type='text'
            name='firstname'
            placeholder='firstname'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 2, mb: 2, display: 'block' }}
            onChange={handleChange}
            value={values.lastname}
            label='Last Name'
            type='text'
            name='lastname'
            placeholder='lastname'
            variant='outlined'
            color='secondary'
            fullWidth
            required
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
