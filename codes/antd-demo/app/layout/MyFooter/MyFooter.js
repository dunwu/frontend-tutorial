/**
 * Created by victor zhang on 2017/6/29.
 */
import React from 'react';
import { Layout } from 'antd';
import './MyFooter.less';

class Footer extends React.PureComponent {
  render() {
    return (
      <Layout className="footer">
        react-step-by-step ©2017 Created by Victor Zhang
      </Layout>
    )
  }
}
export default Footer;
