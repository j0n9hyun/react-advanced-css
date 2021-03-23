import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slide from './components/Slide';
import Test from './components/Test';
import Kenburns from './components/Kenburns';
import RandomHeight from './components/RandomHeight';
import Lab from './components/Lab';
import Masonry from './components/Masonry';
import Lab2 from './components/Lab2';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/slide' exact component={Slide} />
          <Route path='/test' exact component={Test} />
          <Route path='/kenburns' exact component={Kenburns} />
          <Route path='/randomheight' exact component={RandomHeight} />
          <Route path='/lab' exact component={Lab} />
          <Route path='/masonry' exact component={Masonry} />
          <Route path='/lab2' exact component={Lab2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
