import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import s from './Header.modules.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

interface HeaderNavigationLinkProps {
  link: string;
  title: string;
}

const HeaderMenuItem: React.FC<HeaderNavigationLinkProps> = ({ link, title }) => {
  const path = usePath();

  return (
    <li>
      <A href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })}>
        {title}
      </A>
    </li>
  );
};

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => (
  <nav className={cn(s.root, className)}>
    <div className={s.wrap}>
      <Logo className={s.pokemonLogo} />
      <ul className={s.menuWrap}>
        {GENERAL_MENU.map(({ title, link }) => (
          <HeaderMenuItem key={title} link={link} title={title} />
        ))}
      </ul>
    </div>
  </nav>
);

export default Header;
