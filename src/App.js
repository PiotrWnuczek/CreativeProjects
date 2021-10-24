import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import StandardLayout from 'templates/StandardLayout';
import ProtectedRoute from 'templates/ProtectedRoute';
import PersonalProjects from 'pages/PersonalProjects';
import SocialProjects from 'pages/SocialProjects';
import UserProfile from 'pages/UserProfile';
import ProjectDetails from 'pages/ProjectDetails';
import ProjectCreate from 'pages/ProjectCreate';
import SigninForm from 'auth/SigninForm';
import SignupForm from 'auth/SignupForm';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
  palette: {
    primary: { main: '#fefefe' },
    secondary: blue,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StandardLayout>
        <Switch>
          <ProtectedRoute path='/profile' component={UserProfile} />
          <ProtectedRoute exact path='/personal' component={PersonalProjects} />
          <ProtectedRoute exact path='/social' component={SocialProjects} />
          <ProtectedRoute path='/:type/:id' component={ProjectDetails} />
          <ProtectedRoute path='/create' component={ProjectCreate} />
          <Route path='/signin' component={SigninForm} />
          <Route path='/signup' component={SignupForm} />
        </Switch>
      </StandardLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
