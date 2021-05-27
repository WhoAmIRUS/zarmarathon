import React from 'react';
import cn from 'classnames';
import { Pokemon } from '../../../interface/pokemons';
import s from './PokemonModal.modules.scss';
import Heading from '../../Heading';

interface PokemonModalProps {
  pokemon: Pokemon;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon }) => (
  <div className={cn(s.root, s[`pokemonColor_${pokemon.types[0]}`])}>
    <div className={s.pictureWrap}>
      <img src={pokemon.img} alt={pokemon.name} />
    </div>
    <div className={s.info}>
      <Heading tag="h3" className={s.name}>
        {pokemon.name}
      </Heading>
      <div className={s.statWrap}>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats.attack}</div>
          Defense
        </div>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats.defense}</div>
          Attack
        </div>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats['special-attack']}</div>
          Sp Attack
        </div>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats['special-defense']}</div>
          Sp Defense
        </div>
      </div>
    </div>
  </div>
);

export default PokemonModal;
