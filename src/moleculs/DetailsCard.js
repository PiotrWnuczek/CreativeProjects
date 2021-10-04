import React from 'react';
import { Typography, Card } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';

const DetailsCard = ({ details }) => (
  <Card
    sx={{ width: 250 }}
    elevation={1}
  >
    <CardHeader
      title={details.title}
      subheader={details.category}
    />
    <CardContent>
      <Typography
        variant='body2'
        color='textSecondary'
      >
        {details.description}
      </Typography>
    </CardContent>
  </Card>
);

export default DetailsCard;
