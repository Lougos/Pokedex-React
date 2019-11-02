import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AffichagePokedex from "./pages/affichagePokedex";

class App extends React.Component {
render () { 
  return (
    <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Pokedex">Pokedex</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Pokedex">
            <AffichagePokedex />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
      </Router>
  );
}
}

export default App;
