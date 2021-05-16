import React from 'react';
import cn from 'classnames';

import s from './Layout.modules.scss';

interface ILayoutProps {
  className?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, className }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
