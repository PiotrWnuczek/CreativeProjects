import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeElement } from 'logic/elementActions';
import { Typography, Card, IconButton, CardMedia } from '@mui/material';
import { CardHeader, CardContent, Avatar, Button } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const ElementCard = ({ element, projectid, removeElement }) => (
  <Card elevation={1}>
    <CardHeader
      action={
        <IconButton
          onClick={() => {
            removeElement({ type: element.type }, projectid, element.id);
          }}
        >
          <DeleteOutline />
        </IconButton>
      }
      avatar={
        <Avatar>E</Avatar>
      }
      title={element.item}
    />
    {element.item === 'image' && <CardMedia
      component='img'
      height='194'
      image={element.url}
    />}
    <CardContent>
      <Typography
        variant='body2'
        color='textSecondary'
      >
        {element.item === 'file' && <Button
          component={Link}
          to={{ pathname: element.url }}
          color='secondary'
          variant='contained'
          target='_blank'
          download
        >
          Open File
        </Button>}
        <br /> <br />
        {element.content}
      </Typography>
    </CardContent>
  </Card>
);

const mapDispatchToProps = (dispatch) => ({
  removeElement: (data, projectid, id) =>
    dispatch(removeElement(data, projectid, id)),
});

export default connect(null, mapDispatchToProps)
  (ElementCard);
