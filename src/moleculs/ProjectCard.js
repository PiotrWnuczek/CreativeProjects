import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { yellow, green, red, blue } from '@mui/material/colors';
import { DeleteOutlined } from '@mui/icons-material';

const ProjectCard = ({ project, handleDelete }) => {
  let avatarColor = blue[700];

  if (project.category === 'work') { avatarColor = yellow[700] }
  if (project.category === 'money') { avatarColor = green[700] }
  if (project.category === 'todos') { avatarColor = red[700] }

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: avatarColor }}>
              {project.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(project.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={project.title}
          subheader={project.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {project.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};

export default ProjectCard;
