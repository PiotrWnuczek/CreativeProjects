import React from 'react';
import { makeStyles, IconButton, Typography } from '@material-ui/core';
import { Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import { yellow, green, red, blue } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  avatar: {
    background: (note) => {
      if (note.category === 'work') {
        return yellow[700];
      }
      if (note.category === 'money') {
        return green[700];
      }
      if (note.category === 'todos') {
        return red[700];
      }
      return blue[700];
    },
  },
});

const Note = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};

export default Note;
