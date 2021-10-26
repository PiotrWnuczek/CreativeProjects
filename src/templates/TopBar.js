import React from 'react';
import { connect } from 'react-redux';
import { Typography, AppBar, Toolbar, Avatar } from '@mui/material';
import { red, green, blue, orange, indigo } from '@mui/material/colors';
import { format } from 'date-fns';

const TopBar = ({ profile, sideWidth }) => {
  const colors = [red, green, blue, orange, indigo];
  const number = profile.email && profile.email.charCodeAt(0) % 5;
  const avatarColor = profile.email ? colors[number][700] : blue;

  return (
    <AppBar
      sx={{ width: `calc(100% - ${sideWidth}px)` }}
      elevation={0}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          Today is the {format(new Date(), 'do MMMM Y')}
        </Typography>
        <Typography>{profile.email}</Typography>
        <Avatar sx={{ backgroundColor: avatarColor, ml: 2 }}>
          {profile.email && profile.email[0].toUpperCase()}
        </Avatar>
      </Toolbar>
    </AppBar>
  )
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)
  (TopBar);
