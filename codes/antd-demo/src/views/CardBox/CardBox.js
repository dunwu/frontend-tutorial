/**
 * Created by victor zhang on 2017/4/24.
 */
import React from 'react'
import { Row, Col, Card } from 'antd';

import './CardBox.css'

export default class CardBox extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span="8">
            <Card title="Card title" bordered={false}>Demo content</Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>Demo content</Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>Demo content</Card>
          </Col>
        </Row>
      </div>
    )
  }
}
