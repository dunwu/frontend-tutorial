import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
