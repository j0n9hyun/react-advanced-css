import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slide from './components/Slide';
import Test from './components/Test';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/slide' exact component={Slide} />
          <Route path='/test' exact component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
