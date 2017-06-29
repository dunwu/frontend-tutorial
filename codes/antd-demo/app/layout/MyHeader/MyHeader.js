/**
 * Created by victor zhang on 2017/6/29.
 */
import React from 'react';
import { Layout } from 'antd';
import './MyHeader.less';
const { Header } = Layout;

class MyHeader extends React.PureComponent {
  render() {
    return (
      <Header className="header"/>
    )
  }
}
export default MyHeader;
