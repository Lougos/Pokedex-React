import React from 'react';
import axios from 'axios';

import PokemonCase from './PokemonCase';
import Loader from './Loader';

class List extends React.Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?limit=802',
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon : res.data['results'] });
    }

    render() {
        return (
            <>
                {this.state.pokemon ? (
                <div className="row">
                {this.state.pokemon.map(pokemon => (
                <PokemonCase
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                />
                ))}
            </div>
                ) : ( 
                    <Loader />
                )}
            </>
        );
    }
}

export default List;