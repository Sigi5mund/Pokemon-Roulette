import React from 'react';

const PokemonDetails = (props) => {
  if (!props.pokemon) return null;
  return (
    <h3>
      Pokemon Name: {props.pokemon.name}

    </h3>
  )
}

export default PokemonDetails;
