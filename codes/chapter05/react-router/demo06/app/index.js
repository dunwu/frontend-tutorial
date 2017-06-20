import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

const About = () => <h2>关于</h2>;
const Company = () => <h2>公司</h2>;
const User = ({ match }) => (
  <div>
    <h2>用户：{match.params.user}</h2>
  </div>
);

ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li><Link to="/about">关于(static)</Link></li>
        <li><Link to="/company">公司(static)</Link></li>
        <li><Link to="/kim">Kim (dynamic)</Link></li>
        <li><Link to="/chris">Chris (dynamic)</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/company" component={Company}/>
        <Route path="/:user" component={User}/>
      </Switch>
    </div>
  </Router>
), document.getElementById("root"));
