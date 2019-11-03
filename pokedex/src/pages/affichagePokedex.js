import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from '../components/List';
import Form from "../components/Form";
import Loader from "../components/Loader";

class AffichagePokedex extends React.Component {
  
  state = {
    value: this.props.recherche,
    isLoading: true,
    data: [],
    filteredPokemons: [],
    search: this.props.recherche
  };

  handleSubmit = this.handleSubmit.bind(this)
  
    handleSubmit(ev){
        ev.preventDefault();
        this.setState({
            value: new FormData(ev.currentTarget).get('filter'),

        });
      }

    render () {

        const {isLoading,data} = this.state;
        let {filteredPokemons,search,value} = this.state;
        filteredPokemons=[];

        return (
          <>
            <div className="row justify-content-center">
              <h1>Welcome to my Pokedex</h1>
            </div>
            <div className="row justify-content-center">
            <Form/>
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
            <List //data={filteredPokemons}
            /> 
            </div>
          </>
        );
    }
}

export default AffichagePokedex;