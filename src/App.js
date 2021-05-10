import styles from './App.modules.scss';
import './custom.css';

import cn from 'classnames';

const App = () => {
    return (
        <div className={cn(styles.header, 'color')}>Hello world</div>
    );
};

export default App;