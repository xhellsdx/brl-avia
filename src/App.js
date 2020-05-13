import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketsPage from './pages/TicketsPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={TicketsPage} />
  </Switch>
);

export default App;
