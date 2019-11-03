import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AffichagePokedex from "./pages/affichagePokedex";
import Pokemon from './components/Pokemon';
import Navbar from './components/Navbar';

class App extends React.Component {
render () { 
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AffichagePokedex />
          </Route>
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </div>
      </Router>
  );
}
}

export default App;
