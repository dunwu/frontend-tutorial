import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

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
          <li><Link to="/topics/one">主题一</Link></li>
          <li><Link to="/topics/two">主题二</Link></li>
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
