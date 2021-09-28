import React from 'react';
import { makeStyles, Drawer, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
    height: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: 250,
  },
  paper: {
    width: 250,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.paper }}
        variant='permanent'
        anchor='left'
      >
        <Typography variant='h5'>
          Material App
        </Typography>
      </Drawer>
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
};

export default Layout;
