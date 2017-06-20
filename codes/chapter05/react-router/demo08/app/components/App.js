import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/topics">主题列表</Link></li>
        </ul>
      </div>
    )
  }
}
export default App;
