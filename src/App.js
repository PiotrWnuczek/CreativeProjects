import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from 'pages/Notes';
import Create from 'pages/Create';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'><Notes /></Route>
      <Route path='/create'><Create /></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
