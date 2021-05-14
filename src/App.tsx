import cn from 'classnames';
import styles from './App.modules.scss';

const App = () => {
  return <div className={cn(styles.header, 'color')}>Hello world</div>;
};

export default App;
