import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from 'logic/profileActions';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Edit, Done } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';

const ProfileCard = ({ profile, updateProfile }) => {
  const [edit, setEdit] = useState(false);

  return (
    <Card elevation={1}>
      <CardHeader
        title={profile.name}
        action={<>
          {!edit && <IconButton
            onClick={() => setEdit(true)}
          >
            <Edit />
          </IconButton>}
          {edit && <IconButton
            type='submit'
            form='edit'
          >
            <Done />
          </IconButton>}
        </>}
      />
      <CardContent>
        {!edit && <Typography
          variant='body2'
          color='textSecondary'
        >
          {profile.description}
        </Typography>}
        {edit && <Formik
          initialValues={{
            name: profile.name,
            description: profile.description,
          }}
          onSubmit={(values) => {
            updateProfile(values);
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
                value={values.name}
                name='name'
                type='text'
              />
              <TextInput
                onChange={handleChange}
                value={values.description}
                name='description'
                type='text'
                rows={8}
                multiline
              />
            </form>
          )}
        </Formik>}
      </CardContent>
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data) => dispatch(updateProfile(data)),
});

export default connect(null, mapDispatchToProps)
  (ProfileCard);
