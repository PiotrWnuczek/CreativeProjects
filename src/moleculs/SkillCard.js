import React from 'react';
import { Typography, Card } from '@mui/material';
import { CardHeader, CardContent, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';

const SkillCard = ({ skill }) => {
  const colors = [red, green, blue, orange, indigo];
  const number = skill.title.charCodeAt(0) % 5
  let avatarColor = colors[number][700];

  return (
    <Card elevation={1}>
      <CardHeader
        title={skill.title}
        avatar={
          <Avatar sx={{ backgroundColor: avatarColor }}>
            {skill.title[0].toUpperCase()}
          </Avatar>
        }
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
  )
};

export default SkillCard;
