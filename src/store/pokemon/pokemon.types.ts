export type PokemonTypesData = string[];

export interface PokemonTypesState {
  isLoading: boolean;
  data: PokemonTypesData | null;
  error: string | null;
}

export interface PokemonState {
  types: PokemonTypesState;
}
