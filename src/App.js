import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Slide from './components/Slide';
import KenBurns from './components/KenBurns';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/slide' exact component={Slide} />
          <Route path='/kenburns' exact component={KenBurns} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
