import React from 'react';
import Header from '../../components/Header';

interface EmptyProps {
  title?: string;
}

const Empty: React.FC<EmptyProps> = ({ title }) => (
  <div>
    <Header />
    {title}
  </div>
);

export default Empty;
