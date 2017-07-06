import React from 'react';
import { Layout } from 'antd';
import './index.less';
const { Footer } = Layout;

export default class commonFooter extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Footer className="footer">
        Copyright © 2017 Victor Zhang
      </Footer>
    )
  }
}
