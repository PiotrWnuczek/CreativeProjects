import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Layout from 'blocks/Layout';
import Create from 'pages/Create';
import Notes from 'pages/Notes';

const theme = createTheme({
  palette: {
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
      <Layout>
        <Switch>
          <Route exact path='/'><Notes /></Route>
          <Route path='/create'><Create /></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
