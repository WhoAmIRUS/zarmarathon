import React, { useEffect, useState } from 'react';

import s from './Parallax.modules.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPositionX(event.screenX);
      setPositionY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [positionX, positionY]);

  return (
    <div className={s.root}>
      <div className={s.smallPokeBall} style={{ transform: `translate(${positionY * 0.05}px, ${positionX * 0.05}px)` }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={s.cloud} style={{ transform: `translate(${positionY * 0.04}px, ${positionX * 0.04}px)` }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={s.cloudBig} style={{ transform: `translate(${positionY * 0.02}px, ${positionX * 0.02}px)` }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div className={s.pokeBall} style={{ transform: `translate(${positionY * 0.05}px, ${positionX * 0.05}px)` }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={s.pikachu} style={{ transform: `translate(${positionY * 0.01}px, ${positionX * 0.01}px)` }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
