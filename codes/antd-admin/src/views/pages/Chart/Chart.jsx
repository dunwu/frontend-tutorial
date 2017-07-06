/**
 * Created by Administrator on 2017/7/6.
 */
import { Col, Row } from 'antd';
import React from 'react';
import BrushBarChart from './BrushBarChart';
import MixBarChart from './MixBarChart';
import PercentAreaChart from './PercentAreaChart';
import SimpleLineChart from './SimpleLineChart';
import StackedAreaChart from './StackedAreaChart';
import VerticalLineChart from './VerticalLineChart';

export default class Chart extends React.PureComponent {
  render () {
    return (
      <div>
        <Row gutter={24}>
          <Col span={12}>
            <SimpleLineChart/>
          </Col>
          <Col span={12}>
            <VerticalLineChart/>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Col span={12}>
            <BrushBarChart/>
          </Col>
          <Col span={12}>
            <MixBarChart/>
          </Col>
        </Row>

        <br/><br/>

        <Row gutter={24}>
          <Col span={12}>
            <StackedAreaChart/>
          </Col>
          <Col span={12}>
            <PercentAreaChart/>
          </Col>
        </Row>
      </div>
    )
  }
}
