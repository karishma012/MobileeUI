import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Discover from './Pages/Discover';
import CardArea from './Components/CardArea';
import Details from './Pages/Details'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Discover />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
