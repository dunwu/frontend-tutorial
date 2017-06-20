import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
    <h3>主题ID: {match.params.topicId}</h3>
    <h3>主题名: {match.params.topicName}</h3>
  </div>
);

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>主题列表</h1>
        <ul>
          <li><Link to="/topics/topicA/react">主题A</Link></li>
          <li><Link to="/topics/topicB/react-router">主题B</Link></li>
          <li><Link to="/topics/topicC/redux">主题C会被跳转到主题B</Link></li>
          <li><Link to="/">回到首页</Link></li>
        </ul>

        <hr/>

        <Switch>
          <Redirect from="/topics/topicC/redux" to="/topics/topicB/react-router"/>
          <Route path="/topics/:topicId/:topicName" component={Topic}/>
        </Switch>
      </div>
    )
  }
}
export default Topics;
