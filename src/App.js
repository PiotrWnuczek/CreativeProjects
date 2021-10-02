import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import CreateProjects from 'pages/CreateProjects';
import PrivateProjects from 'pages/PrivateProjects';
import PublicProjects from 'pages/PublicProjects';
import UserLayout from 'templates/UserLayout';

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
          <Route path='/create'><CreateProjects /></Route>
          <Route path='/private'><PrivateProjects /></Route>
          <Route path='/public'><PublicProjects /></Route>
        </Switch>
      </UserLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
