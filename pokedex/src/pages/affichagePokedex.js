import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "../components/Navbar";
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
            <div>
            <Form //handleSubmit={this.handleSubmit} value={value} 
            />
            <Loader/> 
            <List //data={filteredPokemons}
            /> 
            </div>
        );
    }
}

export default AffichagePokedex;