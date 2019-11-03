import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    `;

class PokemonCase extends React.Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    };

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }

    render() {

        return (
            <div className="col-md-3 col-sm6 mb-5">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                <div className="card">
                    <h6 className="card-header">{this.state.pokemonIndex}</h6>
                    <Sprite className="card-img-top rounded mx-auto mt-2"
                        src={this.state.imageUrl}/>
                    <div className="card-body mx-auto">
                        <h2 className="card-title">{this.state.name
                            .toLocaleLowerCase() // mettre en minuscule
                            .split(" ") // Si il ya deux noms les split
                            .map(letter => letter.charAt(0).toLocaleUpperCase() + letter.substring(1)) // Première lettre de chaque nom en majuscule
                            .join(" ")}</h2> 
                    </div>   
                </div>
                </Link>
            </div>
            
        );
    }
}

export default PokemonCase