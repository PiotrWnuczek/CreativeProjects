import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProject } from 'actions/projectActions';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';
import { FolderOpen, PeopleOutline, People } from '@mui/icons-material';

const ProjectCard = ({ project, profile, updateProject }) => {
  const colors = [red, green, blue, orange, indigo];
  const number = project.title.charCodeAt(0) % 5;
  let avatarColor = colors[number][700];
  const history = useHistory();

  return (
    <Card elevation={1}>
      <CardHeader
        title={project.title}
        subheader={project.keywords && project.keywords.join(' ')}
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {project.title[0].toUpperCase()}
          </Avatar>
        }
        action={<>
          {project.team.some(i =>
            i.email === profile.email && (i.role === 'member' || i.role === 'admin')
          ) && <IconButton onClick={() => {
            history.push('/' + project.type + '/' + project.id)
          }}>
              <FolderOpen />
            </IconButton>}
          {project.team.some(i =>
            i.email === profile.email && i.role === 'wait'
          ) && <IconButton>
              <People />
            </IconButton>}
          {!project.team.some(i =>
            i.email === profile.email
          ) && <IconButton onClick={() => {
            updateProject({
              type: project.type,
              team: [...project.team, { email: profile.email, role: 'wait' }],
            }, project.id);
          }}>
              <PeopleOutline />
            </IconButton>}
        </>}
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
