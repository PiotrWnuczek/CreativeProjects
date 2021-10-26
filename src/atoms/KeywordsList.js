import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const KeywordsList = ({ id, details, updateProject }) => (
  <div>
    <Typography
      variant='body2'
      color='textSecondary'
      sx={{ mt: 3 }}
    >
      Keywords:
    </Typography>
    {details.keywords && details.keywords.map(item =>
      <Typography
        key={item}
        sx={{ fontSize: 'small' }}
        variant='body2'
        color='textSecondary'
      >
        {item}
        {details.team.some(i =>
          i.role === 'admin' && i.email !== item.email
        ) && <IconButton
          size='small'
          onClick={() => {
            updateProject({
              type: details.type,
              keywords: details.keywords.filter(i => i !== item),
            }, id);
          }}>
            <Close sx={{ fontSize: 'small' }} />
          </IconButton>}
      </Typography>
    )}
  </div>
);

export default KeywordsList;
