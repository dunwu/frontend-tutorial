/**
 * Created by victor zhang on 2017/4/24.
 */
import React from 'react';
import {Layout} from 'antd';
import './Footer.less';

export default class Footer extends React.PureComponent {

  render() {
    return (
      <Layout className="ant-layout-footer">
        Copyright © 2017 Victor Zhang
      </Layout>
    )
  }
}
