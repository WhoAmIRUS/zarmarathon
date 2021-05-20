import React from 'react';
import { Pokemon } from '../PokemonCard/PokemonCard.types';
import PokemonCard from '../PokemonCard';
import s from './PokemonList.modules.scss';

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => (
  <div className={s.root}>
    {pokemons.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);

export default PokemonList;
