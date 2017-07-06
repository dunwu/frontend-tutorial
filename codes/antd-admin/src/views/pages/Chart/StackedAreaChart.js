/**
 * Created by Administrator on 2017/7/6.
 */
import { Card } from 'antd';
import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class StackedAreaChart extends React.PureComponent {
  propTypes = {};

  render () {
    return (
      <Card title="基本用法">
        <AreaChart width={700} height={350} data={data} style={{padding: 20}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8'/>
          <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d'/>
          <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658'/>
        </AreaChart>
      </Card>
    )
  }
}
export default StackedAreaChart;
