/**
 * Created by Administrator on 2017/7/6.
 */
import { Card, Col, Row } from 'antd';
import React from 'react';
import BrushBarChart from './BrushBarChart';
import MixBarChart from './MixBarChart';
import SimpleLineChart from './SimpleLineChart';
import StackedAreaChart from './StackedAreaChart';
import VerticalLineChart from './VerticalLineChart';
import ThreeDimScatterChart from './ThreeDimScatterChart';
import SpecifiedDomainRadarChart from './SpecifiedDomainRadarChart';
import SimpleRadialBarChart from './SimpleRadialBarChart';
import CustomContentTreemap from './CustomContentTreemap';

export default class Chart extends React.PureComponent {
  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col span="12">
            <Card>
              <SimpleLineChart />
            </Card>
          </Col>
          <Col span="12">
            <Card>
              <VerticalLineChart />
            </Card>
          </Col>
        </Row>
        <br /><br />

        <Row gutter={24}>
          <Col span="12">
            <Card>
              <BrushBarChart />
            </Card>
          </Col>
          <Col span="12">
            <Card>
              <MixBarChart />
            </Card>
          </Col>
        </Row>
        <br /><br />

        <Row gutter={24}>
          <Col span="12">
            <Card>
              <ThreeDimScatterChart />
            </Card>
          </Col>
          <Col span="12">
            <Card>
              <StackedAreaChart />
            </Card>
          </Col>
        </Row>
        <br /><br />

        <Row gutter={48}>
          <Col span="8">
            <Card>
              <SpecifiedDomainRadarChart />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <SimpleRadialBarChart />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <CustomContentTreemap />
            </Card>
          </Col>
        </Row>
        <br /><br />
      </div>
    )
  }
}
