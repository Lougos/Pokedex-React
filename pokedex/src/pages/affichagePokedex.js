import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from '../components/List';
import Form from "../components/Form";
import Loader from "../components/Loader";

class AffichagePokedex extends React.Component {
  
 /* state = {
      value: '',
  };
  
  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({
      value: new FormData(ev.currentTarget).get('filter'),
    });

  } */

    render () {

        //const filteredPokemons = data.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.value.toLowerCase()),
        //);

        return (
          <>
            <div className="row justify-content-center">
              <h1>Welcome to my Pokedex</h1>
            </div>
            <div className="row justify-content-center">
            <Form //handleSubmit={this.handleSubmit} value={value} 
            />
            </div>
            <div>
            <Loader/> 
            <List //data={filteredPokemons}
            /> 
            </div>
          </>
        );
    }
}

export default AffichagePokedex;