import { PropsWithChildren } from 'react';
import Home from './pages/Home';
import Empty from './pages/Empty';
import Pokedex from './pages/Pokedex';
import Pokemon, { PokemonProps } from './pages/Pokemon';

export enum LinkRoutes {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON_PAGE = '/pokedex/:id',
}

export interface GeneralMenu {
  title: string;
  link: LinkRoutes;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: GeneralMenu[] = [
  {
    title: 'Home',
    link: LinkRoutes.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: LinkRoutes.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkRoutes.LEGENDARIES,
    component: () => <Empty title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkRoutes.DOCUMENTATION,
    component: () => <Empty title="Documentation" />,
  },
];

export const SECOND_MENU: GeneralMenu[] = [
  {
    title: 'Pokemon Page',
    link: LinkRoutes.POKEMON_PAGE,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

export interface Routes {
  [key: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export default [...GENERAL_MENU, ...SECOND_MENU].reduce<Routes>((acc, cur) => {
  acc[cur.link] = cur.component;

  return acc;
}, {});
