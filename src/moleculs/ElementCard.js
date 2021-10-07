import React from 'react';
import { connect } from 'react-redux';
import { removeElement } from 'logic/elementActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';
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
    <CardContent>
      <Typography
        variant='body2'
        color='textSecondary'
      >
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
