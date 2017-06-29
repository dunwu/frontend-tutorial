/**
 * Created by victor zhang on 2017/6/29.
 */
import React from 'react';
import { Layout } from 'antd';
import './MyContent.less';
const { Content } = Layout;

class MyContent extends React.PureComponent {
  render() {
    return (
      <Content className="content">
        <Layout className="text">
          {this.props.children}
        </Layout>
      </Content>
    )
  }
}
export default MyContent;
