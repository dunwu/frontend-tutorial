/**
 * Created by Administrator on 2017/7/6.
 */
import { Card } from 'antd';
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class CustomizedLabel extends React.PureComponent {
  render () {
    const {x, y, stroke, value} = this.props;
    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
  }
}

class CustomizedAxisTick extends React.PureComponent {
  render () {
    const {x, y, stroke, payload} = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

class SimpleLineChart extends React.PureComponent {
  propTypes = {};

  render () {
    return (
      <Card title="基本用法">
        <LineChart width={700} height={350} data={data} style={{padding: 20}}>
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick/>}/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
        </LineChart>
      </Card>
    )
  }
}
export default SimpleLineChart;
