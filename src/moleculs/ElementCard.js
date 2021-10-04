import React from 'react';
import { Typography, Card } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';

const ElementCard = ({ element }) => (
  <Card elevation={1}>
    <CardHeader
      avatar={
        <Avatar>E</Avatar>
      }
      title={element.title}
      subheader={element.category}
    />
    <CardContent>
      <Typography
        variant='body2'
        color='textSecondary'
      >
        {element.description}
      </Typography>
    </CardContent>
  </Card>
);

export default ElementCard;
