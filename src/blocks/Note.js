import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const Note = ({ note, handleDelete }) => (
  <div>
    <Card elevation={1}>
      <CardHeader
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
);

export default Note;
