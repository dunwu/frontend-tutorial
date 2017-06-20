import React from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';

const Topic = ({match}) => (
  <div>
    <h3>主题ID: {match.params.topicId}</h3>
    <h3>主题名: {match.params.topicName}</h3>
  </div>
);

class Topics extends React.PureComponent {
  render () {
    return (
      <div>
        <h1>主题列表</h1>
        <p>激活的链接会改变样式</p>
        <ul>
          <li><NavLink to="/topics/topicA/react" activeClassName="active">主题A</NavLink></li>
          <li><NavLink to="/topics/topicB/react-router" activeClassName="active">主题B</NavLink></li>
          <li><NavLink to="/topics/topicC/redux" activeClassName="active">主题C会被跳转到主题B</NavLink></li>
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
