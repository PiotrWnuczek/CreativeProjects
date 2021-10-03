import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, Typography, AppBar, Toolbar } from '@mui/material';
import { List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { styled } from '@mui/system';
import { format } from 'date-fns';

const drawerWidth = 240;

const StyledPage = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
}));

const StyledRoot = styled('div')({
  display: 'flex',
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const UserLayout = ({ children }) => {
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
    <StyledRoot>
      <AppBar
        sx={{ width: `calc(100% - ${drawerWidth}px)` }}
        elevation={0}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            React
          </Typography>
          <Avatar sx={{ ml: 2 }} src='/logo512.png' />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{ width: drawerWidth, '& .MuiDrawer-paper': { width: drawerWidth } }}
        variant='permanent'
        anchor='left'
      >
        <Typography sx={{ p: 2 }} variant='h5'>
          Material App
        </Typography>
        <List>
          {menu.map(item =>
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
      <StyledPage>
        <Offset /> {children}
      </StyledPage>
    </StyledRoot>
  )
};

export default UserLayout;
