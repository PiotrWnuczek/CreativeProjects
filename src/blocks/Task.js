import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { yellow, green, red, blue } from '@mui/material/colors';
import { DeleteOutlined } from '@mui/icons-material';

const Task = ({ task, handleDelete }) => {
  let avatarColor = blue[700];

  if (task.category === 'work') { avatarColor = yellow[700] }
  if (task.category === 'money') { avatarColor = green[700] }
  if (task.category === 'todos') { avatarColor = red[700] }

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: avatarColor }}>
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
