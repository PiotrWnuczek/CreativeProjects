import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from 'logic/projectActions';
import { Formik } from 'formik';
import ButtonInput from 'atoms/ButtonInput';

const DetailsEdit = ({ name, value, type, id, setEdit, updateProject }) => (
  <Formik
    initialValues={{ ...value }}
    onSubmit={(values) => {
      updateProject({ ...values, type }, id);
      setEdit(false);
    }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <ButtonInput
          onChange={handleChange}
          value={Object.values(values)[0]}
          name={name}
          type='text'
        />
      </form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (DetailsEdit);
