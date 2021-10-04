import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, Typography, List } from '@mui/material';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';

const SideBar = ({ drawerWidth }) => {
  const history = useHistory();
  const location = useLocation();

  const loginMenu = [
    {
      text: 'Personal Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/personal',
    },
    {
      text: 'Social Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/social',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/create',
    },
  ];

  const logoutMenu = [
    {
      text: 'Sign In',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/signin',
    },
    {
      text: 'Sign Up',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/signup',
    },
  ];

  return (
    <Drawer
      sx={{ width: drawerWidth, '& .MuiDrawer-paper': { width: drawerWidth } }}
      variant='permanent'
      anchor='left'
    >
      <Typography sx={{ p: 2 }} variant='h5'>
        Material App
      </Typography>
      <List>
        {loginMenu.map(item =>
          <ListItem button
            sx={{ backgroundColor: location.pathname === item.path && '#f4f4f4' }}
            onClick={() => history.push(item.path)}
            key={item.text}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        )}
      </List>
      <List>
        {logoutMenu.map(item =>
          <ListItem button
            sx={{ backgroundColor: location.pathname === item.path && '#f4f4f4' }}
            onClick={() => history.push(item.path)}
            key={item.text}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        )}
      </List>
    </Drawer>
  )
};

export default SideBar;
