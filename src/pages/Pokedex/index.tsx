import React from 'react';
import Header from '../../components/Header';
import PokemonList from '../../components/Pokemons/PokemonList';
import { pokemons } from '../../components/Pokemons/pokemons';

const Pokedex = () => (
  <div>
    <Header />
    <PokemonList pokemons={pokemons} />
  </div>
);

export default Pokedex;
