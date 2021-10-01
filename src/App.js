import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Layout from 'blocks/Layout';
import Create from 'pages/Create';
import Tasks from 'pages/Tasks';

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
      <Layout>
        <Switch>
          <Route exact path='/'><Tasks /></Route>
          <Route path='/create'><Create /></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
