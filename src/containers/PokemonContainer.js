import React from 'react';
import NameForm from '../components/NameForm.js';
import PokemonDetails from '../components/PokemonDetails.js';

class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null
    };

    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://pokeapi.co/api/v2/pokemon/?limit=949';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) return;
      const jsonString = xhr.responseText;
      const pokemons = JSON.parse(jsonString);
      this.setState({
        pokemons: pokemons.results
      })
    })
    xhr.send();
  }

  pokemonDetailsRequest(pokemonURL){
    const url = pokemonURL;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) return;
      const jsonString = xhr.responseText;
      const currentPokemon = JSON.parse(jsonString);
      this.setState({
        currentPokemon: currentPokemon
      })
    })
    xhr.send();
  }

  handlePokemonSelected(){
    const rand = this.randomNumber();

    const randomPokemon = this.state.pokemons[rand];
    const url = randomPokemon.url
    this.pokemonDetailsRequest(url)
  }

  randomNumber(){
    let min= Math.ceil(0);
    let max= Math.floor(949);
    return Math.floor(Math.random()*(max-min+1))+min;
  }


  render(){
    return (
      <div>
        <h2>Pokemon Super Selector</h2>
        <NameForm onNameInput = {this.handlePokemonSelected}/>
        <PokemonDetails pokemon ={this.state.currentPokemon}/>
      </div>
    );
  }
}


export default PokemonContainer;
