import { useRoutes } from 'hookrouter';
import React from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import { store } from '../store';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <Provider store={store}>
      <Header />
      {match}
    </Provider>
  ) : (
    <NotFound />
  );
};

export default App;
