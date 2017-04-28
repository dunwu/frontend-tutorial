/**
 * Created by zhangpeng0913 on 2017/4/24.
 */
import React from "react";
import {Layout} from "antd";
import "./MyFooter.css";

const {Footer} = Layout;

export default class MyFooter extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Footer className="normal">
        Copyright © 2017 Victor Zhang
      </Footer>
    )
  }
}
