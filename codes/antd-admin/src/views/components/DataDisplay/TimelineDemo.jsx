/**
 * Timeline 时间轴
 * https://ant.design/components/timeline-cn/
 * Created by Zhang Peng on 2017/7/6.
 */
import React from 'react';
import { Card, Col, Icon, Row, Timeline } from 'antd';

export default class AlertDemo extends React.PureComponent {
  render() {
    return (
      <Card title="Timeline 时间轴">

        <Row gutter={24}>
          <Col span={6}>
            <Card title="基本用法">
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="圆圈颜色">
              <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="最后一个节点">
              <Timeline pending={<a href="#">See more</a>}>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="自定义时间轴点">
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }}/>} color="red">Technical
                  testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>

        <br/><br/>
      </Card>
    )
  }
}
