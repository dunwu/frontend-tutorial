import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById("root"));
