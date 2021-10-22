import React from 'react';
import { Typography } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';

const SkillCard = ({ skill }) => (
  <Card elevation={1}>
    <CardHeader
      title={skill.title}
    />
    <CardContent>
      <Typography
        variant='body2'
        color='textSecondary'
      >
        {skill.description}
      </Typography>
    </CardContent>
  </Card>
);

export default SkillCard;
