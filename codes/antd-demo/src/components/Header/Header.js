/**
 * Created by zhangpeng0913 on 2017/4/24.
 */
import React from 'react';
import {Badge, Icon, Layout} from 'antd';
import './Header.less';

export default class Header extends React.PureComponent {

  state = {
    count: 5,
    show: true,
  };

  render() {
    return (
      <Layout className="ant-layout-header">
        <div>
          <Badge className="ant-badge" count={this.state.count}>
            <a href="#">
              <Icon type="mail"/>
            </a>
          </Badge>
          {/*<Badge dot={this.state.show}>
            <a href="#">
              <Icon type="notification"/>
            </a>
          </Badge>*/}
        </div>
      </Layout>
    )
  }
}
