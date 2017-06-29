import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Topics from './components/Topics';
import NoMatch from './components/NoMatch';
import App from './layout/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
);
export default Routes;
