import React from 'react';
import cn from 'classnames';
import s from './Header.modules.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

interface HeaderNavigationLinkProps {
  label: string;
}

const HeaderMenuItem: React.FC<HeaderNavigationLinkProps> = ({ label }) => (
  <li>
    <a href="#" className={s.menuLink}>
      {label}
    </a>
  </li>
);

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => (
  <nav className={cn(s.root, className)}>
    <div className={s.wrap}>
      <Logo className={s.pokemonLogo} />
      <ul className={s.menuWrap}>
        <HeaderMenuItem label="Home" />
        <HeaderMenuItem label="Pokédex" />
        <HeaderMenuItem label="Legendaries" />
        <HeaderMenuItem label="Documentation" />
      </ul>
    </div>
  </nav>
);

export default Header;
