import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProfile, updateProfile } from 'actions/profileActions';
import { IconButton, Typography, Button } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Edit, Done } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';

const ProfileCard = ({ profile, removeProfile, updateProfile }) => {
  const [edit, setEdit] = useState(false);
  const history = useHistory();

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
          {profile.description || 'edit profile and add description'}
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
                rows={10}
                multiline
              />
            </form>
          )}
        </Formik>}
        {edit && <Button
          color='secondary'
          size='small'
          onClick={() => {
            removeProfile();
            history.push('/signup');
          }}
        >
          Delete Account
        </Button>}
      </CardContent>
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => ({
  removeProfile: () => dispatch(removeProfile()),
  updateProfile: (data) => dispatch(updateProfile(data)),
});

export default connect(null, mapDispatchToProps)
  (ProfileCard);
