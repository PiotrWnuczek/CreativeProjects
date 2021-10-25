import React from 'react';
import { connect } from 'react-redux';
import { signOut } from 'logic/profileActions';
import { useHistory, useLocation } from 'react-router-dom';
import { Drawer, Typography, List, Divider } from '@mui/material';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { PersonOutline, Login, Logout } from '@mui/icons-material';
import { AddCircleOutline, Subject } from '@mui/icons-material';

const SideBar = ({ sideWidth, auth, signOut }) => {
  const history = useHistory();
  const location = useLocation();

  const userMenu = [
    {
      text: 'Your Profile',
      icon: <PersonOutline color='secondary' />,
      path: '/profile',
    },
    {
      text: 'Create Project',
      icon: <AddCircleOutline color='secondary' />,
      path: '/create',
    },
  ];
  const mainMenu = [
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
  const authMenu = [
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

  return (
    <Drawer
      sx={{ width: sideWidth, '& .MuiDrawer-paper': { width: sideWidth } }}
      variant='permanent'
      anchor='left'
    >
      <Typography
        sx={{ p: 2, cursor: 'pointer' }}
        variant='h5'
        onClick={() => history.push('/profile')}
      >
        Material App
      </Typography>
      {auth.uid && <div>
        <List>
          {userMenu.map(item =>
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
        <Divider />
        <List>
          {mainMenu.map(item =>
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
          <ListItem button
            sx={{ marginTop: '50vh' }}
            onClick={signOut}
          >
            <ListItemIcon><Logout color='secondary' /></ListItemIcon>
            <ListItemText primary='Sign Out' />
          </ListItem>
        </List>
      </div>}
      {!auth.uid && <List>
        {authMenu.map(item =>
          <ListItem button
            sx={{ backgroundColor: location.pathname === item.path && '#f4f4f4' }}
            onClick={() => history.push(item.path)}
            key={item.text}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        )}
      </List>}
    </Drawer>
  )
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToPorps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToPorps)
  (SideBar);
