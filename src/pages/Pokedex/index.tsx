import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/Pokemons/PokemonList';
import s from './Pokedex.modules.scss';
import { Pokemon } from '../../components/Pokemons/PokemonCard/PokemonCard.types';
import { req } from '../../utils/api';
import { Endpoints } from '../../config';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';

interface PokemonsRegistry {
  count: number;
  limit: number;
  offset: number;
  pokemons: Pokemon[];
  total: number;
}

const usePokemons = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<PokemonsRegistry | null>(null);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await req(Endpoints.GET_POKEMONS);
        setData(response);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return { isLoading, isError, data };
};

const Pokedex = () => {
  const { data, isLoading } = usePokemons();

  return (
    <Layout className={s.root}>
      <Heading tag="h3" className={s.title}>
        {data ? data.total : ''} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      {isLoading ? 'Loading...' : <PokemonList pokemons={data?.pokemons} />}
    </Layout>
  );
};

export default Pokedex;
