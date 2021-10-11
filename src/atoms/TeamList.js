import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';

const TeamList = ({ id, details, profile, updateProject }) => (
  <div>
    <Typography
      variant='subtitle1'
      sx={{ mt: 4 }}
    >
      Team:
    </Typography>
    {details.team && details.team.map(item =>
      <Typography
        key={item.email}
        sx={{ fontSize: 12 }}
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
            <KeyboardArrowRight sx={{ fontSize: 16 }} />
          </IconButton>}
      </Typography>
    )}
  </div>
);

export default TeamList;
