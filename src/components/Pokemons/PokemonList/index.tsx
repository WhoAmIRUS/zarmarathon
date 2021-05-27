import React from 'react';
import PokemonCard from '../PokemonCard';
import s from './PokemonList.modules.scss';
import { Pokemon } from '../../../interface/pokemons';

interface PokemonListProps {
  pokemons?: Pokemon[];
  onPokemonClick?: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onPokemonClick }) => (
  <div className={s.root}>
    {pokemons
      ? pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} onPokemonClick={onPokemonClick} />)
      : 'No data'}
  </div>
);

export default PokemonList;
