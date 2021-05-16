import React from 'react';
import cn from 'classnames';
import s from './Button.modules.scss';

interface ButtonProps {
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, fullWidth, onClick, color = 'primary', size = 'medium' } = props;

  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.root_width_full]: !!fullWidth,
        [s.root_color_secondary]: color === 'secondary',
        [s.root_size_small]: size === 'small',
        [s.root_size_large]: size === 'large',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
