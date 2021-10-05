import React from 'react';
import { connect } from 'react-redux';
import { signout } from 'logic/authActions';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, Typography, List } from '@mui/material';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { AddCircleOutline, Subject } from '@mui/icons-material';
import { Login, Logout } from '@mui/icons-material';

const SideBar = ({ sideWidth, auth, signout }) => {
  const history = useHistory();
  const location = useLocation();

  const loginMenu = [
    {
      text: 'Create Projects',
      icon: <AddCircleOutline color='secondary' />,
      path: '/create',
    },
    {
      text: 'Personal Projects',
      icon: <Subject color='secondary' />,
      path: '/personal',
    },
    {
      text: 'Social Projects',
      icon: <Subject color='secondary' />,
      path: '/social',
    },
  ];

  const logoutMenu = [
    {
      text: 'Sign In',
      icon: <Login color='secondary' />,
      path: '/signin',
    },
    {
      text: 'Sign Up',
      icon: <Login color='secondary' />,
      path: '/signup',
    },
  ];

  const menu = auth.uid ? loginMenu : logoutMenu;

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
        {auth.uid &&
          <ListItem button
            sx={{ marginTop: '60vh' }}
            onClick={signout}
          >
            <ListItemIcon><Logout color='secondary' /></ListItemIcon>
            <ListItemText primary='Sign Out' />
          </ListItem>}
      </List>
    </Drawer>
  )
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToPorps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToPorps)
  (SideBar);
