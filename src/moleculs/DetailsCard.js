import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject, updateProject } from 'actions/projectActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';
import { Edit, Done, Delete } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';
import KeywordsList from 'atoms/KeywordsList';
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
          ><Edit /></IconButton>}
          {edit && <IconButton
            type='submit'
            form='edit'
          ><Done /></IconButton>}
          {details.team.some(i =>
            i.email === profile.email && i.role === 'admin'
          ) && <IconButton onClick={() => {
            removeProject({ type: details.type }, id);
            history.push('/' + details.type);
          }}><Delete /></IconButton>}
        </>}
      />
      <CardContent>
        {!edit && <Typography
          variant='body2'
          color='textSecondary'
        >
          {details.description}
        </Typography>}
        {!edit && <KeywordsList
          id={id}
          details={details}
          profile={profile}
          updateProject={updateProject}
        />}
        {details.type === 'social' && !edit && <TeamList
          id={id}
          details={details}
          profile={profile}
          updateProject={updateProject}
        />}
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
                rows={10}
                multiline
              />
            </form>
          )}
        </Formik>}
      </CardContent>
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
