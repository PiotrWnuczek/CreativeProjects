import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from 'actions/projectActions';
import { Formik } from 'formik';
import { Send } from '@mui/icons-material';
import ButtonInput from './ButtonInput';

const ChatSection = ({ id, details, profile, updateProject }) => (
  <div>
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={(values, { resetForm }) => {
        values.message && updateProject({
          type: details.type,
          chat: [...details.chat, { email: profile.email, ...values }],
        }, id);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          autoComplete='off'
        >
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
    {details.chat.map((item, index) => (
      <p key={index}>
        {item.email}<br />
        {item.message}<br />
      </p>
    ))}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (ChatSection);
