import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

function Routes() {
  return (
    <Switch >
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
    </Switch >
  );
};

export default Routes;