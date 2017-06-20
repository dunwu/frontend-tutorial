import React from 'react';
import { Link, Route } from 'react-router-dom';
import TopicA from './TopicA';
import TopicB from './TopicB';

class Topics extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>主题列表</h1>
        <ul>
          <li><Link to="/topics/topicA">主题A</Link></li>
          <li><Link to="/topics/topicB">主题B</Link></li>
        </ul>

        <hr/>

        <Route path="/topics/topicA" component={TopicA}/>
        <Route path="/topics/topicB" component={TopicB}/>
      </div>
    )
  }
}
export default Topics;
