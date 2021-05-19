import React from 'react';
import { navigate } from 'hookrouter';
import s from './Home.modules.scss';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from './Parallax';
import { LinkRoutes } from '../../routes';

const Home = () => (
  <div className={s.root}>
    <Header className={s.header} />
    <Layout className={s.contentWrapper}>
      <div className={s.contentLeft}>
        <Heading tag="h1" className={s.contentTitle}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <Heading tag="h3" className={s.contentDescription}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </Heading>
        <Button onClick={() => navigate(LinkRoutes.POKEDEX)}>See pokemons</Button>
      </div>
      <Parallax />
    </Layout>
  </div>
);

export default Home;
