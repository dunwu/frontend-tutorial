import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>关于</h1>
        <Link to="/">回到首页</Link>
      </div>
    )
  }
}
export default About;
