import React, { useState } from 'react';
import { navigate } from 'hookrouter';
import PokemonList from '../../components/Pokemons/PokemonList';
import s from './Pokedex.modules.scss';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import useData from '../../hooks/useData';
import { Pokemon } from '../../interface/pokemons';
import { Endpoints, Query } from '../../interface/api';
import useDebounce from '../../hooks/useDebounce';
import { LinkRoutes } from '../../routes';

interface PokemonsRegistry {
  count: number;
  limit: number;
  offset: number;
  pokemons: Pokemon[];
  total: number;
}

interface PokemonsRegistryQuery extends Query {
  name: string;
}

const Pokedex = () => {
  const [query, setQuery] = useState<PokemonsRegistryQuery>({ name: '' });
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading } = useData<PokemonsRegistry>(Endpoints.GET_POKEMONS, { query }, [debounceValue]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  return (
    <Layout className={s.root}>
      <Heading tag="h3" className={s.title}>
        {data ? data.total : ''} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <input onChange={handleChangeSearch} className={s.searchBar} placeholder="Encuentra tu pokémon..." />
      {isLoading ? (
        'Loading...'
      ) : (
        <PokemonList
          pokemons={data?.pokemons}
          onPokemonClick={(pokemon: Pokemon) => navigate(`${LinkRoutes.POKEDEX}/${pokemon.id}`)}
        />
      )}
    </Layout>
  );
};

export default Pokedex;
