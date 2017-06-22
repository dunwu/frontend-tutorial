import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const One = () => (
  <h3>主题一</h3>
);

const Two = () => (
  <h3>主题二</h3>
);

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
          <Route path='/topics/one' component={One}/>
          <Route path='/topics/two' component={Two}/>
        </Switch>
      </div>
    )
  }
}
export default Topics;
