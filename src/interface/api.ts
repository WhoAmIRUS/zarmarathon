export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type Protocol = 'http' | 'https';

export enum Endpoints {
  GET_POKEMONS = 'getPokemons',
  GET_POKEMON_BY_ID = 'getPokemonById',
  CREATE_POKEMON = 'createPokemon',
  UPDATE_POKEMON = 'updatePokemon',
  DELETE_POKEMON = 'deletePokemon',
}

export interface Query {
  [key: string]: string | number;
}

export interface RequestOptions {
  query?: Query;
  id?: string | number;
  data?: object;
}

export interface FetchOption {
  method: Method;
  body?: BodyInit;
}

export interface GetUrlWithParamsConfigURI {
  protocol: Protocol;
  host: string;
  pathname: string;
  query?: Query;
}

export interface GetUrlWithParamsConfig {
  method: Method;
  uri: GetUrlWithParamsConfigURI;
  body?: object;
}
