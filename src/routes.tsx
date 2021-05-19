import Home from './pages/Home';
import Empty from './pages/Empty';
import Pokedex from './pages/Pokedex';

export enum LinkRoutes {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export interface GeneralMenu {
  title: string;
  link: LinkRoutes;
  component: () => JSX.Element;
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

export interface Routes {
  [key: string]: () => JSX.Element;
}

export default GENERAL_MENU.reduce<Routes>((acc, cur) => {
  acc[cur.link] = cur.component;

  return acc;
}, {});
