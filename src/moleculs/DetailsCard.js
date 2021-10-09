import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject, updateProject } from 'logic/projectActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, CardActions } from '@mui/material';
import { Edit, DeleteOutline, ExitToApp, KeyboardArrowRight } from '@mui/icons-material';
import DetailsEdit from 'moleculs/DetailsEdit';

const DetailsCard = ({ details, id, profile, removeProject, updateProject }) => {
  const history = useHistory();
  const [edit, setEdit] = useState(false);

  return (
    <Card elevation={1}>
      <CardHeader
        title={
          <>{edit === 'title' ?
            <DetailsEdit
              name='title'
              setEdit={setEdit}
              value={{ title: details.title }}
              type={details.type}
              id={id}
            /> :
            <div>
              {details.title}
              <IconButton onClick={() => setEdit('title')}>
                <Edit />
              </IconButton>
            </div>
          }</>
        }
        subheader={
          <>{edit === 'category' ?
            <DetailsEdit
              name='category'
              setEdit={setEdit}
              value={{ category: details.category }}
              type={details.type}
              id={id}
            /> :
            <div>
              {details.category}
              <IconButton
                size='small'
                onClick={() => setEdit('category')}
              >
                <Edit fontSize='small' />
              </IconButton>
            </div>
          }</>
        }
      />
      <CardContent>
        <Typography
          variant='body1'
          color='textSecondary'
          component='div'
        >
          {edit === 'description' ?
            <DetailsEdit
              name='description'
              setEdit={setEdit}
              value={{ description: details.description }}
              type={details.type}
              id={id}
            /> :
            <div>
              {details.description}
              <IconButton
                size='small'
                onClick={() => setEdit('description')}
              >
                <Edit fontSize='small' />
              </IconButton>
            </div>
          }
          <Typography
            variant='subtitle1'
            sx={{ mt: 4 }}
          >
            Team:
          </Typography>
          {details.team && details.team.map(item =>
            <Typography
              key={item.email}
              sx={{ fontSize: 12 }}
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
                }}
              >
                  <KeyboardArrowRight sx={{ fontSize: 16 }} />
                </IconButton>}
            </Typography>
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            details.team.some(i =>
              i.role === 'admin' && i.email !== profile.email
            ) && updateProject({
              type: details.type,
              team: details.team.filter(i => i.email !== profile.email),
            }, id);
          }}
        >
          <ExitToApp />
        </IconButton>
        {details.team.some(i =>
          i.email === profile.email && i.role === 'admin'
        ) && <IconButton
          onClick={() => {
            removeProject({ type: details.type }, id);
            history.push('/' + details.type);
          }}
        >
            <DeleteOutline />
          </IconButton>}
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
