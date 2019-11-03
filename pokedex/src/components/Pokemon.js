import React from 'react';
import axios from 'axios';
import '../App.css';
import './Pokemon.css';

import hp from './../img/health.png';
import atk from './../img/swords.png';
import def from './../img/shield.png';
import speed from './../img/running.png';
import speAtk from './../img/book.png';
import speDef from './../img/protection.png';

const Type_Couleurs = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

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
            Math.round(pokemonRes.data.height * 10); // passer de décimètre a centimètre
        this.setState({height});

        const weight =
            Math.round(pokemonRes.data.weight * 100); // passer de hectogramme à gramme
        this.setState({weight});
    
        const types = pokemonRes.data.types.map(type => type.type.name);
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
                                <h5>{this.state.name.toLocaleLowerCase() // mettre en minuscule
                                                    .split(" ") // Si il ya deux noms les split
                                                    .map(letter => letter.charAt(0).toLocaleUpperCase() + letter.substring(1)) // Première lettre de chaque nom en majuscule
                                                    .join(" ")}</h5>
                                <div>
                                    {this.state.types.map(type => (
                                    <span
                                        key={type}
                                        className="badge badge-pill mr-1"
                                        style={{
                                        backgroundColor: `#${Type_Couleurs[type]}`,
                                        color: 'white'
                                        }}>
                                        {type
                                        .toLowerCase()
                                        .split(' ')
                                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                        .join(' ')}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div>
                                    <img src={this.state.imageUrl}></img>
                                </div>
                                    <div>
                                        <div>
                                            <div className='info row align-items-center'>
                                                <img src={hp} alt='Vie' className='stats_icon'/><p>{this.state.stats.hp}</p>
                                                <img src={speed} alt='Vitesse' className='stats_icon'/><p>{this.state.stats.speed}</p>
                                            </div>
                                            <div className='info row align-items-center'>
                                                <img src={atk} alt='Attaque' className='stats_icon'/><p>{this.state.stats.attack}</p>
                                                <img src={def} alt='Défense' className='stats_icon'/><p>{this.state.stats.defense}</p>
                                            </div>
                                            <div className='info row align-items-center'>
                                                <img src={speAtk} alt='Attaque Spécial' className='stats_icon'/><p>{this.state.stats.specialAttack}</p>
                                                <img src={speDef} alt='Défense Spécial' className='stats_icon'/><p>{this.state.stats.specialDefense}</p>
                                            </div>
                                        </div>
                                    </div>
                                <div>
                                    <img src={this.state.imageUrlShiny}></img>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-center">
                                    Taille :<p>{this.state.height}</p>cm
                                </div>
                                <div className="row justify-content-center">
                                    Poids :<p>{this.state.weight}</p>gramme
                                </div>
                                <div className="row justify-content-center">
                                    Description :<p>{this.state.description}</p>
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