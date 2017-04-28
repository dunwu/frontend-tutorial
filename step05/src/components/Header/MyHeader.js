/**
 * Created by zhangpeng0913 on 2017/4/24.
 */
import React from "react";
import {Badge, Col, Icon, Layout, Row} from "antd";
import "./MyHeader.css";

const {Header} = Layout;

export default class MyHeader extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Header className="header-normal">
        <Row type="flex" justify="end" align="middle">
          <Col span={3}>
            <Badge className="header-icon" count={3}>
              <a href="#">
                <Icon type="mail"/>
              </a>
            </Badge>
            <Badge className="header-icon" dot>
              <a href="#">
                <Icon type="notification"/>
              </a>
            </Badge>
          </Col>
        </Row>
      </Header>
    )
  }
}
