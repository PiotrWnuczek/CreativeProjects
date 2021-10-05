import React from 'react';
import { connect } from 'react-redux';
import { Typography, AppBar, Toolbar, Avatar } from '@mui/material';
import { format } from 'date-fns';

const TopBar = ({ sideWidth, profile }) => (
  <AppBar
    sx={{ width: `calc(100% - ${sideWidth}px)` }}
    elevation={0}
  >
    <Toolbar>
      <Typography sx={{ flexGrow: 1 }}>
        Today is the {format(new Date(), 'do MMMM Y')}
      </Typography>
      <Typography>{profile.initials}</Typography>
      <Avatar sx={{ ml: 2 }} src='/logo512.png' />
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)
  (TopBar);
