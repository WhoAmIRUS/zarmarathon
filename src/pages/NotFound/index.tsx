import React from 'react';
import s from './NotFound.modules.scss';

const NotFound = () => (
  <div className={s.root}>
    <div className={s.rootText}>404</div>
    <div>
      <img src="../../assets/Team_Rocket.png" alt="Team Rocket" />
    </div>
  </div>
);

export default NotFound;
