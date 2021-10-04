import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, Typography, List } from '@mui/material';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';

const SideBar = ({ sideWidth }) => {
  const history = useHistory();
  const location = useLocation();

  const loginMenu = [
    {
      text: 'Personal Projects',
      icon: <SubjectOutlined color='secondary' />,
      path: '/personal',
    },
    {
      text: 'Social Projects',
      icon: <SubjectOutlined color='secondary' />,
      path: '/social',
    },
    {
      text: 'Create Projects',
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
      sx={{ width: sideWidth, '& .MuiDrawer-paper': { width: sideWidth } }}
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
