import React from 'react';

interface EmptyProps {
  title?: string;
}

const Empty: React.FC<EmptyProps> = ({ title }) => <div>{title}</div>;

export default Empty;
