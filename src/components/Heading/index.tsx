import React from 'react';
import cn from 'classnames';
import s from './Heading.modules.scss';

type HeadingTagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  tag: HeadingTagVariants;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className, tag }) =>
  React.createElement(tag, { className: cn(s.heading, s[tag], className) }, children);

export default Heading;
