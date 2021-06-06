import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonState, PokemonTypesData } from './pokemon.types';
import { AppDispatch } from '../index';
import { req } from '../../utils/api';
import { Endpoints } from '../../interface/api';

const initialState: PokemonState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemonTypesRequest: (state) => {
      state.types.isLoading = true;
      state.types.data = null;
      state.types.error = null;
    },
    getPokemonTypesSuccess: (state, action: PayloadAction<PokemonTypesData>) => {
      state.types.isLoading = false;
      state.types.data = action.payload;
      state.types.error = null;
    },
    getPokemonTypesFailed: (state, action: PayloadAction<string>) => {
      state.types.isLoading = false;
      state.types.data = null;
      state.types.error = action.payload;
    },
  },
});

export const { getPokemonTypesRequest, getPokemonTypesSuccess, getPokemonTypesFailed } = pokemonSlice.actions;

export const getPokemonTypes = () => async (dispatch: AppDispatch) => {
  dispatch(getPokemonTypesRequest());
  try {
    const response = await req<PokemonTypesData>(Endpoints.GET_POKEMON_TYPES);
    dispatch(getPokemonTypesSuccess(response));
  } catch (error) {
    dispatch(getPokemonTypesFailed('Error'));
  }
};

export default pokemonSlice.reducer;
