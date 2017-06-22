import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Topics from './components/Topics';
import NoMatch from './components/NoMatch';
import Welcome from './components/Welcome';

const Routes = () => (
  <Router>
    <div>
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题</Link></li>
        <li><Link to="/redirect">重定向到关于页面</Link></li>
        <li><Link to="/nomatch">无法匹配的页面</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Redirect from="/redirect" to="/about"/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);
export default Routes;
