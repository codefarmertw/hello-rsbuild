import STYLES from './App.module.scss';
import type { Author } from './types';

const App = () => {
  const author: Author = {
    name: 'codefarmer',
    email: 'codefarmer.tw@gmail.com',
    // url: 'https://codefarmer.tw',
  };

  return (
    <div className={STYLES.content}>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <p>Author: {author.name}</p>
    </div>
  );
};

export default App;
