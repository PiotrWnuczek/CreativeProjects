import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { KeyboardArrowRight, Close } from '@mui/icons-material';

const TeamList = ({ id, details, profile, updateProject }) => (
  <div>
    <Typography
      variant='body2'
      color='textSecondary'
      sx={{ mt: 3 }}
    >
      Team:
    </Typography>
    {details.team && details.team.map(item =>
      <Typography
        key={item.email}
        sx={{ fontSize: 'small' }}
        variant='body2'
        color='textSecondary'
      >
        {item.email} <br /> ({item.role})
        {details.team.some(i =>
          i.email === profile.email && i.role === 'admin'
        ) && <IconButton
          size='small'
          onClick={() => {
            let newRole = 'wait';
            if (item.role === 'wait') { newRole = 'member' }
            if (item.role === 'member') { newRole = 'admin' }
            if (item.role === 'admin') { newRole = 'wait' }
            item.email !== profile.email && updateProject({
              team: details.team.map(i =>
                i.email === item.email ? { ...i, role: newRole } : i
              ), type: details.type
            }, id);
          }}
        >
            <KeyboardArrowRight sx={{ fontSize: 'small' }} />
          </IconButton>}
        {details.team.some(i =>
          i.role === 'admin' && i.email !== item.email
        ) && <IconButton
          size='small'
          onClick={() => {
            updateProject({
              type: details.type,
              team: details.team.filter(i => i.email !== item.email),
            }, id);
          }}>
            <Close sx={{ fontSize: 'small' }} />
          </IconButton>}
      </Typography>
    )}
  </div>
);

export default TeamList;
