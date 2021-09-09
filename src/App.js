import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Notes from 'pages/Notes';
import Create from 'pages/Create';

const theme = createTheme({
  palette: {
    secondary: purple,
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
      <Switch>
        <Route exact path='/'><Notes /></Route>
        <Route path='/create'><Create /></Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
