export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  ['special-attack']: number;
  ['special-defense']: number;
}

export type PokemonTypes = 'grass' | 'poison' | 'fire' | 'flying' | 'bug' | 'water';

export type PokemonAbilities =
  | 'overgrow'
  | 'chlorophyll'
  | 'blaze'
  | 'solar-power'
  | 'shield-dust'
  | 'run-away'
  | 'rain-dish'
  | 'torrent';

export interface Pokemon {
  name_clean: string;
  abilities: PokemonAbilities[];
  stats: PokemonStats;
  types: PokemonTypes[];
  img: string;
  name: string;
  ['base_experience']: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}
