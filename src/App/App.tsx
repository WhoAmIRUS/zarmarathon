import { useRoutes } from 'hookrouter';
import React from 'react';
import routes from '../routes';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
