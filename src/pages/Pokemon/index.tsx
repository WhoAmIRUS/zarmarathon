import React from 'react';
import PokemonModal from '../../components/Pokemons/PokemonModal';
import useData from '../../hooks/useData';
import { Pokemon } from '../../interface/pokemons';
import { Endpoints } from '../../interface/api';

export interface PokemonProps {
  id: number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data } = useData<Pokemon>(Endpoints.GET_POKEMON_BY_ID, { id });

  if (!data) return null;

  return <PokemonModal pokemon={data} />;
};

export default PokemonPage;
