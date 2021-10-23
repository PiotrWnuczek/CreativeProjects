import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeElement } from 'logic/elementActions';
import { Typography, Card, IconButton } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';
import { DeleteOutline } from '@mui/icons-material';

const ElementCard = ({ element, projectid, removeElement }) => {
  const colors = [red, green, blue, orange, indigo];
  const number = element.item.charCodeAt(0) % 5
  let avatarColor = colors[number][700];

  return (
    <Card elevation={1}>
      <CardHeader
        title={element.item}
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {element.item[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => {
              removeElement({ type: element.type }, projectid, element.id);
            }}
          >
            <DeleteOutline />
          </IconButton>
        }
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
        >
          {element.item === 'file' && <Link
            to={{ pathname: element.url }}
            target='_blank'
          >
            Open File
          </Link>}
          <br />
          {element.content}
        </Typography>
      </CardContent>
    </Card>
  )
};

const mapDispatchToProps = (dispatch) => ({
  removeElement: (data, projectid, id) =>
    dispatch(removeElement(data, projectid, id)),
});

export default connect(null, mapDispatchToProps)
  (ElementCard);
