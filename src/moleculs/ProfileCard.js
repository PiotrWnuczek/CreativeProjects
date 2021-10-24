import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Edit } from '@mui/icons-material';

const ProfileCard = ({ profile }) => {
  const [edit, setEdit] = useState(false);

  return (
    <Card elevation={1}>
      <CardHeader
        title='Profile Name'
        action={<>
          <IconButton onClick={() => setEdit(true)}>
            <Edit />
          </IconButton>
        </>}
      />
      <CardContent>
        <Typography
          variant='body1'
          color='textSecondary'
          component='div'
        >
          {!edit && 'Profile Description'}
          <br />
          {profile.email}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default ProfileCard;
