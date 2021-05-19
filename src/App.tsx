import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFound from './pages/NotFound';

const App = () => useRoutes(routes) || <NotFound />;

export default App;
