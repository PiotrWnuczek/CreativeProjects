import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import UserLayout from 'templates/UserLayout';
import ProtectedRoute from 'auth/ProtectedRoute';
import CreateProjects from 'pages/CreateProjects';
import PersonalProjects from 'pages/PersonalProjects';
import SocialProjects from 'pages/SocialProjects';
import DetailsProject from 'pages/DetailsProject';
import SigninForm from 'auth/SigninForm';
import SignupForm from 'auth/SignupForm';

const theme = createTheme({
  palette: {
    primary: { main: '#fefefe' },
    secondary: blue,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserLayout>
        <Switch>
          <ProtectedRoute path='/create' component={CreateProjects} />
          <ProtectedRoute path='/personal' component={PersonalProjects} />
          <ProtectedRoute path='/social' component={SocialProjects} />
          <ProtectedRoute path='/:type/:id' component={DetailsProject} />
          <Route path='/signin' component={SigninForm} />
          <Route path='/signup' component={SignupForm} />
        </Switch>
      </UserLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
