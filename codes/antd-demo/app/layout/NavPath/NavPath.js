/**
 * Created by victor zhang on 2017/6/29.
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import './NavPath.less';

class NavPath extends React.PureComponent {
  render() {
    return (
      <Breadcrumb className="navpath">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Topics</Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
export default NavPath;
