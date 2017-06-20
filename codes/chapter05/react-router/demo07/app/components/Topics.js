import React from 'react';
import { Link, Route } from 'react-router-dom';

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
          <li><Link to="/">回到首页</Link></li>
        </ul>

        <hr/>

        <Route path="/topics/:topicId/:topicName" component={Topic}/>
      </div>
    )
  }
}
export default Topics;
