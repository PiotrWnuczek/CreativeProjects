import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject, updateProject } from 'logic/projectActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, CardActions } from '@mui/material';
import { Edit, DeleteOutline, ExitToApp } from '@mui/icons-material';
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
              <IconButton onClick={() => setEdit('category')}>
                <Edit />
              </IconButton>
            </div>
          }</>
        }
      />
      <CardContent>
        <Typography
          variant='body2'
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
              <IconButton onClick={() => setEdit('description')}>
                <Edit />
              </IconButton>
            </div>
          }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            updateProject({
              type: details.type,
              team: details.team.filter(i => i !== profile.email),
            }, id);
          }}
        >
          <ExitToApp />
        </IconButton>
        <IconButton
          onClick={() => {
            removeProject({ type: details.type }, id);
            history.push('/' + details.type);
          }}
        >
          <DeleteOutline />
        </IconButton>
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
