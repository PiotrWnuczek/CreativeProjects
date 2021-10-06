import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject } from 'logic/projectActions';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import { DeleteOutline, FolderOpen } from '@mui/icons-material';

const ProjectCard = ({ project, removeProject }) => {
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
                removeProject({ type: project.type }, project.id);
              }}
            >
              <DeleteOutline />
            </IconButton>
            <IconButton
              onClick={() =>
                history.push('/' + project.type + '/' + project.id)
              }
            >
              <FolderOpen />
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

const mapDispatchToProps = (dispatch) => ({
  removeProject: (data, id) => dispatch(removeProject(data, id)),
});

export default connect(null, mapDispatchToProps)
  (ProjectCard);
