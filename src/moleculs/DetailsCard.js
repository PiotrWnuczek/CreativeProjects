import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject, updateProject } from 'logic/projectActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, CardActions } from '@mui/material';
import { Edit, Done, Delete, ExitToApp } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';
import TeamList from 'atoms/TeamList';

const DetailsCard = ({ details, id, profile, removeProject, updateProject }) => {
  const history = useHistory();
  const [edit, setEdit] = useState(false);

  return (
    <Card elevation={1}>
      <CardHeader
        title={details.title}
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
          component='div'
        >
          {details.description}
          <TeamList
            id={id}
            details={details}
            profile={profile}
            updateProject={updateProject}
          />
        </Typography>}
        {edit && <Formik
          initialValues={{
            title: details.title,
            description: details.description,
          }}
          onSubmit={(values) => {
            updateProject({ type: details.type, ...values }, id);
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
                value={values.title}
                name='title'
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
      <CardActions>
        {details.team.some(i =>
          i.role === 'admin' && i.email !== profile.email
        ) && <IconButton onClick={() => {
          updateProject({
            type: details.type,
            team: details.team.filter(i => i.email !== profile.email),
          }, id);
        }}><ExitToApp /></IconButton>}
        {details.team.some(i =>
          i.email === profile.email && i.role === 'admin'
        ) && <IconButton onClick={() => {
          removeProject({ type: details.type }, id);
          history.push('/' + details.type);
        }}><Delete /></IconButton>}
      </CardActions>
    </Card>
  )
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});

const mapDispatchToProps = (dispatch) => ({
  removeProject: (data, id) => dispatch(removeProject(data, id)),
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (DetailsCard);
