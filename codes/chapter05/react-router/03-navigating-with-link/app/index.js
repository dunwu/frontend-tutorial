import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Repos from './components/Repos';

ReactDOM.render((
  // 注意：Router 只能有一个子元素
  <Router>
    <div>
      <ul role="nav">
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/repos">Repos Page</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
), document.getElementById('root'));
