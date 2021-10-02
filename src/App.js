import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import Layout from 'blocks/Layout';
import Create from 'pages/Create';
import Projects from 'pages/Projects';

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
          <Route exact path='/'><Projects /></Route>
          <Route path='/create'><Create /></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
