import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProject } from 'actions/projectActions';
import { Typography, IconButton } from '@mui/material';
import { Add, Done, Close } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';

const KeywordsList = ({ id, details, updateProject }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <Typography
        variant='body2'
        color='textSecondary'
        sx={{ mt: 3 }}
      >
        Keywords:
        {!edit && <IconButton
          size='small'
          onClick={() => setEdit(true)}
        >
          <Add sx={{ fontSize: 'large' }} />
        </IconButton>}
        {edit && <IconButton
          size='small'
          type='submit'
          form='edit'
        >
          <Done sx={{ fontSize: 'large' }} />
        </IconButton>}
      </Typography>
      {edit && <Formik
        initialValues={{
          keyword: '',
        }}
        onSubmit={(values) => {
          values.keyword && updateProject({
            type: details.type,
            keywords: [...details.keywords, values.keyword],
          }, id);
          setEdit(false);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            id='edit'
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <TextInput
              onChange={handleChange}
              value={values.keyword}
              name='keyword'
              type='text'
              size='small'
              add={1}
            />
          </form>
        )}
      </Formik>}
      {details.keywords && details.keywords.map(item =>
        <Typography
          key={item}
          sx={{ fontSize: 'small' }}
          variant='body2'
          color='textSecondary'
        >
          {item}
          <IconButton
            size='small'
            onClick={() => {
              updateProject({
                type: details.type,
                keywords: details.keywords.filter(i => i !== item),
              }, id);
            }}>
            <Close sx={{ fontSize: 'small' }} />
          </IconButton>
        </Typography>
      )}
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (KeywordsList);
