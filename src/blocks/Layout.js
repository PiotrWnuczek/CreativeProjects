import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles, Drawer, Typography, AppBar, Toolbar } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon, Avatar } from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { format } from 'date-fns';

const drawerWidth = 240;

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
    width: drawerWidth,
  },
  paper: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4',
  },
  title: {
    padding: theme.spacing(2),
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar: theme.mixins.toolbar,
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
      <AppBar
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Piotr
          </Typography>
          <Avatar src='/logo512.png' className={classes.avatar} />
        </Toolbar>
      </AppBar>
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
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  )
};

export default Layout;
