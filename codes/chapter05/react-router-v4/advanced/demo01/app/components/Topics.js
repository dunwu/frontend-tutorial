import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

class Topic extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>ID: {this.props.match.params.id}</h3>
      </div>
    )
  }
}

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>主题</h2>
        <ul role="nav">
          <li><NavLink to="/topics/one" activeStyle={{ fontWeight: 'bold', color: 'red' }}>主题一</NavLink></li>
          <li><NavLink to="/topics/two" activeClassName="active">主题二</NavLink></li>
        </ul>

        <hr/>

        <Switch>
          <Route exact path='/topics'/>
          <Route path='/topics/:id' component={Topic}/>
        </Switch>
      </div>
    )
  }
}
export default Topics;
