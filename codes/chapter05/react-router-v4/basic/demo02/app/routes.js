import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Topics from './components/Topics';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </Switch>
  </Router>
);
export default Routes;
