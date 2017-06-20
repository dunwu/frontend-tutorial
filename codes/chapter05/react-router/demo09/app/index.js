import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Topics from './components/Topics';
import NoMatch from './components/NoMatch';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
), document.getElementById("root"));
