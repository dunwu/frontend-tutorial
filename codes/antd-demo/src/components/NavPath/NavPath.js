/**
 * Created by victor zhang on 2017/4/24.
 */
import React from "react";
import {Breadcrumb} from "antd";
import "./NavPath.css";


export default class NavPath extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Breadcrumb className="bread-normal">
        <Breadcrumb.Item>导航一</Breadcrumb.Item>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
