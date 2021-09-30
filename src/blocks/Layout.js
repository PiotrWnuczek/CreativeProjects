import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles, Drawer, Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
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
  active: {
    background: '#f4f4f4',
  },
  title: {
    padding: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menu = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.paper }}
        variant='permanent'
        anchor='left'
      >
        <Typography variant='h5' className={classes.title}>
          Material App
        </Typography>
        <List>
          {menu.map(item =>
            <ListItem button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path && classes.active}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          )}
        </List>
      </Drawer>
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
};

export default Layout;
