import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';

ReactDOM.render((
  // 注意：Router 只能有一个子元素
  <Router>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('root'));
