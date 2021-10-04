import React from 'react';
import { connect } from 'react-redux';
import { remove } from 'logic/projectActions';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import { DeleteOutlined } from '@mui/icons-material';

const ProjectCard = ({ project, remove }) => {
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
          <IconButton
            onClick={() => {
              console.log({ type: project.type }, project.id);
              remove({ type: project.type }, project.id);
            }}
          >
            <DeleteOutlined />
          </IconButton>
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
  remove: (data, id) => dispatch(remove(data, id)),
});

export default connect(null, mapDispatchToProps)
  (ProjectCard);
