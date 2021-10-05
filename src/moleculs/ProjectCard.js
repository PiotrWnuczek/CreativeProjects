import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { remove } from 'logic/projectActions';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import { DeleteOutlined } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

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
              remove({ type: project.type }, project.id);
            }}
          >
            <DeleteOutlined />
          </IconButton>
        }
        title={project.title}
        subheader={project.category}
      />
      <StyledLink to={'/' + project.type + '/' + project.id}>
        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
          >
            {project.description}
          </Typography>
        </CardContent>
      </StyledLink>
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => ({
  remove: (data, id) => dispatch(remove(data, id)),
});

export default connect(null, mapDispatchToProps)
  (ProjectCard);
