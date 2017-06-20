import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById("root"));
