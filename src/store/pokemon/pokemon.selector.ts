import { RootState } from '../index';

// eslint-disable-next-line import/prefer-default-export
export const getPokemonTypesSelector = (state: RootState) => state.pokemon.types;
