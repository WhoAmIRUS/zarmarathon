import React from 'react';
import cn from 'classnames';
import Heading from '../../Heading';

import s from './PokemonCard.modules.scss';
import { PokemonCardProps } from './PokemonCard.types';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => (
  <div className={s.root}>
    <div className={s.infoWrap}>
      <Heading tag="h5" className={s.titleName}>
        {pokemon.name}
      </Heading>
      <div className={s.statWrap}>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats.attack}</div>
          Attack
        </div>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats.defense}</div>
          Defense
        </div>
      </div>
      <div className={s.labelWrap}>
        {pokemon.types.map((type) => (
          <span key={type} className={cn(s.label, s[`pokemonColor_${type}`])}>
            {type}
          </span>
        ))}
      </div>
    </div>
    <div className={cn(s.pictureWrap, s[`pokemonColor_${pokemon.types[0]}`])}>
      <img src={pokemon.img} alt={pokemon.name} />
    </div>
  </div>
);

export default PokemonCard;
