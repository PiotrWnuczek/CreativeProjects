import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from 'actions/projectActions';
import { Formik } from 'formik';
import { Send } from '@mui/icons-material';
import ButtonInput from './ButtonInput';

const ChatSection = ({ updateProject }) => (
  <Formik
    initialValues={{
      message: '',
    }}
    onSubmit={(values) => {
      updateProject(values);
    }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <ButtonInput
          onChange={handleChange}
          value={values.message}
          name='message'
          type='text'
          icon={<Send sx={{ fontSize: 20 }} />}
        />
      </form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (ChatSection);
