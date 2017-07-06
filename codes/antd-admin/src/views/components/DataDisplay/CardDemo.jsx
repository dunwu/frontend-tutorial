/**
 * antd 卡片控件示例
 * https://ant.design/components/button-cn/
 * Created by victor zhang on 2017/7/5.
 */
import React from 'react';
import { Card, Col, Row } from 'antd';

export default class CardDemo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Card title="Card 卡片" bordered={false}>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={24}>
            <Col span={8}>
              <Card title="典型卡片" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="无边框卡片" bordered={false}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>

          <br/><br/>

          <Row gutter={24}>
            <Col span={12}>
              <Card loading title="预加载的卡片">
                Whatever content
              </Card>
            </Col>
            <Col span={12}>
              <Card loading title="预加载的卡片">
                Whatever content
              </Card>
            </Col>
          </Row>

          <br/><br/>

          <Row gutter={24}>
            <Col span={6}>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="http://cdn.instantlogosearch.com/svg/logomono/facebook.svg"/>
                </div>
                <div className="custom-card">
                  <h3>facebook</h3>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="http://cdn.instantlogosearch.com/svg/logomono/baidu.svg"/>
                </div>
                <div className="custom-card">
                  <h3>baidu</h3>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="http://cdn.instantlogosearch.com/svg/logomono/alibaba.svg"/>
                </div>
                <div className="custom-card">
                  <h3>alibaba</h3>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="http://cdn.instantlogosearch.com/svg/svgporn/microsoft.svg"/>
                </div>
                <div className="custom-card">
                  <h3>microoft</h3>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    )
  }
}
