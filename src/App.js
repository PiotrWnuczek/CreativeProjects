import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import MainLayout from 'templates/MainLayout';
import ProtectedRoute from 'access/ProtectedRoute';
import PersonalProjects from 'pages/PersonalProjects';
import SocialProjects from 'pages/SocialProjects';
import UserProfile from 'pages/UserProfile';
import ProjectDetails from 'pages/ProjectDetails';
import ProjectCreate from 'pages/ProjectCreate';
import SigninForm from 'access/SigninForm';
import SignupForm from 'access/SignupForm';

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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MainLayout>
        <Switch>
          <Route path='/signin' component={SigninForm} />
          <Route path='/signup' component={SignupForm} />
          <ProtectedRoute path='/profile' component={UserProfile} />
          <ProtectedRoute path='/create' component={ProjectCreate} />
          <ProtectedRoute exact path='/' render={() => <Redirect to='/profile' />} />
          <ProtectedRoute exact path='/personal' component={PersonalProjects} />
          <ProtectedRoute exact path='/social' component={SocialProjects} />
          <ProtectedRoute path='/:type/:id' component={ProjectDetails} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
