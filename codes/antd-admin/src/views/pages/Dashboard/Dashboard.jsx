/**
 * Created by Administrator on 2017/7/6.
 */
import { Calendar, Card, Col, Progress, Row } from 'antd';
import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import CustomTooltip from './CustomTooltip';
import './Dashboard.less';

/*北京经纬度*/
const position = [39.903, 116.392];

const data = [
  {name: 'Monday', male: 10, total: 20, amt: 24},
  {name: 'Tuesday', male: 20, total: 30, amt: 22},
  {name: 'Wednesday', male: 40, total: 60, amt: 22},
  {name: 'Thursday', male: 30, total: 50, amt: 20},
  {name: 'Friday', male: 10, total: 40, amt: 21},
  {name: 'Saturday', male: 15, total: 30, amt: 25},
  {name: 'Sunday', male: 40, total: 50, amt: 21},
];

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#ffd500';
const brandDanger = '#f86c6b';

const RADIAN = Math.PI / 180;

export default class Dashboard extends React.PureComponent {

  render () {
    return (
      <div>
        {/*微型报表栏*/}
        <Row className="tiny-charts" gutter={36}>
          <Col span="6">
            <Card className="blue-card">
              <div>
                <h4>19550</h4>
                <p>周访问量</p>
              </div>
              <LineChart width={300} height={100} style={{margin: "0 auto"}} data={data}>
                <Tooltip content={<CustomTooltip />} />
                <Line type='step' dataKey='total' stroke='#f5f5f5' strokeWidth={2} activeDot={{r: 4}} />
              </LineChart>
            </Card>
          </Col>
          <Col span="6">
            <Card className="green-card">
              <div>
                <h4>19550</h4>
                <p>周访问量</p>
              </div>
              <LineChart width={300} height={100} style={{margin: "0 auto"}} data={data}>
                <Tooltip content={<CustomTooltip />} />
                <Line type='linear' dataKey='total' stroke='#f5f5f5' strokeWidth={2} activeDot={{r: 4}} />
              </LineChart>
            </Card>
          </Col>
          <Col span="6">
            <Card className="red-card">
              <div>
                <h4>19550</h4>
                <p>周访问量</p>
              </div>
              <BarChart width={300} height={100} barSize={20} style={{margin: "0 auto"}} data={data}>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey='total' fill='#f5f5f5' />
              </BarChart>
            </Card>
          </Col>
          <Col span="6">
            <Card className="yellow-card">
              <div>
                <h4>19550</h4>
                <p>周访问量</p>
              </div>
              <AreaChart width={300} height={100} data={data} style={{margin: "0 auto"}}
                         margin={{top: 5, right: 0, left: 0, bottom: 5}}>
                <Tooltip content={<CustomTooltip />} />
                <Area type='monotone' dataKey='total' stroke='#f5f5f5' fill='#f5f5f5' />
              </AreaChart>
            </Card>
          </Col>
        </Row>
        <br /><br />

        {/*主报表栏*/}
        <Card title="Traffic">
          <Row gutter={36}>
            <Col span={16}>
              <Card >
                <AreaChart width={1000} height={400} data={data}
                           style={{margin: "0 auto"}}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type='monotone' dataKey='male' stackId="1" stroke='#8884d8' fill='#8884d8' />
                  <Area type='monotone' dataKey='total' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                </AreaChart>
              </Card>
            </Col>

            <Col span={8}>
              <Card className="footer" title="Work Progress">
                <div height={400}>
                  <div>
                    <h4>Work A</h4>
                    <Progress percent={30} strokeWidth={20} />
                  </div>
                  <div>
                    <h4>Work B</h4>
                    <Progress percent={70} strokeWidth={20} status="active" />
                  </div>
                  <div>
                    <h4>Work C</h4>
                    <Progress percent={10} strokeWidth={20} status="exception" />
                  </div>
                  <div>
                    <h4>Work D</h4>
                    <Progress percent={100} strokeWidth={20} />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}
