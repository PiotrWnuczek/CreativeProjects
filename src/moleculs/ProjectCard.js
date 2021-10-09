import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProject } from 'logic/projectActions';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import { FolderOpen, PeopleOutline } from '@mui/icons-material';

const ProjectCard = ({ project, profile, updateProject }) => {
  const history = useHistory();
  let avatarColor = blue[700];
  if (project.category === 'work') { avatarColor = red[700] }
  if (project.category === 'life') { avatarColor = green[700] }

  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {project.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <div>
            <IconButton
              onClick={() => {
                history.push('/' + project.type + '/' + project.id);
              }}
            >
              <FolderOpen />
            </IconButton>
            <IconButton
              onClick={() => {
                !project.team.some(i => i.email === profile.email) && updateProject({
                  type: project.type,
                  team: [...project.team, { email: profile.email, role: 'wait' }],
                }, project.id);
              }}
            >
              <PeopleOutline />
            </IconButton>
          </div>
        }
        title={project.title}
        subheader={project.category}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  )
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data, id) => dispatch(updateProject(data, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)
  (ProjectCard);
