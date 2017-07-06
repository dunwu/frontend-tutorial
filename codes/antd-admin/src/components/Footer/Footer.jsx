import { Layout } from 'antd';
import React from 'react';
import './index.less';
const {Footer} = Layout;

export default class commonFooter extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Footer className="footer">
        Copyright © 2017 Victor Zhang
      </Footer>
    )
  }
}
