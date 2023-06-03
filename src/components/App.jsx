import Home from 'pages/Home';
import css from './App.module.css';
import Tweets from 'pages/Tweets';

function App() {
  return (
    <div className={css.app}>
      <Home />
      <Tweets />
    </div>
  );
}

export default App;
