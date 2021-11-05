import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject, updateProject } from 'actions/projectActions';
import { Typography, Card, IconButton, Button } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';
import { Edit, Done, Chat, Subject } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';
import KeywordsList from 'atoms/KeywordsList';
import TeamList from 'atoms/TeamList';
import ChatSection from 'atoms/ChatSection';

const DetailsCard = ({ details, id, profile, removeProject, updateProject }) => {
  const [edit, setEdit] = useState(false);
  const [chat, setChat] = useState(false);
  const history = useHistory();

  return (
    <Card elevation={1}>
      <CardHeader
        title={details.title}
        action={<>
          {!chat && !edit && <IconButton
            onClick={() => setEdit(true)}
          >
            <Edit />
          </IconButton>}
          {!chat && edit && <IconButton
            type='submit'
            form='edit'
          >
            <Done />
          </IconButton>}
          {!edit && <IconButton
            onClick={() => setChat(!chat)}
          >
            {chat ? <Subject /> : <Chat />}
          </IconButton>}
        </>}
      />
      {!chat && <CardContent>
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
        {!edit && details.type === 'social' && <TeamList
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
        {edit && details.team.some(i =>
          i.email === profile.email && i.role === 'admin'
        ) && <Button
          color='secondary'
          size='small'
          onClick={() => {
            removeProject({ type: details.type }, id);
            history.push('/' + details.type);
          }}
        >
            Delete Project
          </Button>}
      </CardContent>}
      {chat && <CardContent>
        <ChatSection />
      </CardContent>}
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
