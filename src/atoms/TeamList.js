import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProject } from 'actions/projectActions';
import { Typography, IconButton } from '@mui/material';
import { Add, Done, KeyboardArrowRight, Close } from '@mui/icons-material';
import { Formik } from 'formik';
import TextInput from 'atoms/TextInput';

const TeamList = ({ id, details, profile, updateProject }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <Typography
        variant='body2'
        color='textSecondary'
        sx={{ mt: 3 }}
      >
        Team:
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
          user: '',
        }}
        onSubmit={(values) => {
          values.user && updateProject({
            type: details.type,
            team: [...details.team, { email: values.user, role: 'member' }],
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
              value={values.user}
              name='user'
              type='text'
              size='small'
              add={1}
            />
          </form>
        )}
      </Formik>}
      {details.team && details.team.map(item =>
        <Typography
          key={item.email}
          sx={{ fontSize: 'small' }}
          variant='body2'
          color='textSecondary'
        >
          {item.email} <br /> ({item.role})
          {details.team.some(i =>
            i.email === profile.email && i.role === 'admin'
          ) && <IconButton
            size='small'
            onClick={() => {
              let newRole = 'wait';
              if (item.role === 'wait') { newRole = 'member' }
              if (item.role === 'member') { newRole = 'admin' }
              if (item.role === 'admin') { newRole = 'wait' }
              item.email !== profile.email && updateProject({
                team: details.team.map(i =>
                  i.email === item.email ? { ...i, role: newRole } : i
                ), type: details.type
              }, id);
            }}>
              <KeyboardArrowRight sx={{ fontSize: 'small' }} />
            </IconButton>}
          {details.team.some(i =>
            i.role === 'admin' && i.email !== item.email
          ) && <IconButton
            size='small'
            onClick={() => {
              updateProject({
                type: details.type,
                team: details.team.filter(i => i.email !== item.email),
              }, id);
            }}>
              <Close sx={{ fontSize: 'small' }} />
            </IconButton>}
        </Typography>
      )}
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (TeamList);
