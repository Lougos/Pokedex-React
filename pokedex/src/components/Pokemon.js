import React from 'react';
import axios from 'axios';
import '../App.css';
import './Pokemon.css';

class Pokemon extends React.Component {

    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        imageUrlShiny: '',
        types: [],
        description: '',
        stats: {
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            specialAttack: "",
            specialDefense: ""
        },
        height: "",
        weight: "",
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        const pokemonRes = await axios.get(pokemonUrl);

        const name = pokemonRes.data.name;
        this.setState({ name });

        const imageUrl = pokemonRes.data.sprites.front_default;
        this.setState({ imageUrl });

        const imageUrlShiny = pokemonRes.data.sprites.front_shiny;
        this.setState({ imageUrlShiny });

        let {
            hp,
            attack,
            defense,
            speed,
            specialAttack,
            specialDefense
        } = '';

        pokemonRes.data.stats.map(stat => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                break;
                default:
                break;
            }
        })
        this.setState({stats: {
            hp,
            attack,
            defense,
            speed,
            specialAttack,
            specialDefense
        }});

        const height = 
            Math.round(pokemonRes.data.height * 0,1); // passer de décimètre a mètre
        this.setState({height});

        const weight =
            Math.round(pokemonRes.data.weight * 0,1); // passer de hectogramme à kilogramme
        this.setState({weight});
    
        const types = pokemonRes.data.types.map(type => type.type.name.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' '));
        this.setState({types});

        await axios.get(pokemonSpeciesURL).then(res => {
            let description = '';
            res.data.flavor_text_entries.some(flavor => {
              if (flavor.language.name === 'en') {
                description = flavor.flavor_text;
                return;
              }
            });

            this.setState({description});
            });
    }
    

    render() {
        return(
            <>
            <div className="col">
                    <div className="card">
                        <div className="card-header align-items-center">
                            <div className="row justify-content-around">
                            <h5>{this.state.name}</h5>
                            <div><h5>{this.state.types}</h5></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div>
                                    <img src={this.state.imageUrl}></img>
                                </div>
                                <div className>

                                </div>
                                <div>
                                    <img src={this.state.imageUrlShiny}></img>
                                </div>
                            </div>

                        </div>
                    </div>   
            </div>
            </>
        );
    }
}

export default Pokemon;