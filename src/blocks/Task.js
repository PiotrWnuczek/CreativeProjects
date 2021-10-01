import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { yellow, green, red, blue } from '@mui/material/colors';
import { DeleteOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  avatar: {
    background: (task) => {
      if (task.category === 'work') {
        return yellow[700];
      }
      if (task.category === 'money') {
        return green[700];
      }
      if (task.category === 'todos') {
        return red[700];
      }
      return blue[700];
    },
  },
});

const Task = ({ task, handleDelete }) => {
  const classes = useStyles(task);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {task.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(task.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={task.title}
          subheader={task.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {task.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};

export default Task;
