import React, { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';
import PokemonList from '../../components/Pokemons/PokemonList';
import s from './Pokedex.modules.scss';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import useData from '../../hooks/useData';
import { Pokemon } from '../../interface/pokemons';
import { Endpoints, Query } from '../../interface/api';
import { LinkRoutes } from '../../routes';
import { useAppDispatch, useAppSelector } from '../../store';
import { getPokemonTypes } from '../../store/pokemon/pokemon.slice';
import { getPokemonTypesSelector } from '../../store/pokemon/pokemon.selector';

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
  const { data: types } = useAppSelector(getPokemonTypesSelector);
  // const [searchValue, setSearchValue] = useState<string>('');
  // const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading } = useData<PokemonsRegistry>(Endpoints.GET_POKEMONS, { query }, [query]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchValue(e.target.value);
    setQuery((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery((state) => ({
      ...state,
      type: e.target.value,
    }));
  };

  return (
    <Layout className={s.root}>
      <Heading tag="h3" className={s.title}>
        {data ? data.total : ''} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <input onChange={handleChangeSearch} className={s.searchBar} placeholder="Encuentra tu pokémon..." />
      <div className={s.filters}>
        <select onChange={handleFilter}>
          <option disabled selected>
            Type
          </option>
          {types?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
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
