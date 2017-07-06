/**
 * Created by Administrator on 2017/7/6.
 */
import { Card } from 'antd';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, female: 2400, male: 2400},
  {name: 'Page B', uv: 3000, female: 1398, male: 2210},
  {name: 'Page C', uv: 2000, female: 9800, male: 2290},
  {name: 'Page D', uv: 2780, female: 3908, male: 2000},
  {name: 'Page E', uv: 1890, female: 4800, male: 2181},
  {name: 'Page F', uv: 2390, female: 3800, male: 2500},
  {name: 'Page G', uv: 3490, female: 4300, male: 2100},
];

class MixBarChart extends React.PureComponent {
  propTypes = {};

  render () {
    return (
      <Card title="基本用法">
        <BarChart width={700} height={350} data={data} style={{padding: 20}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="female" stackId="a" fill="#8884d8"/>
          <Bar dataKey="male" stackId="a" fill="#82ca9d"/>
          <Bar dataKey="uv" fill="#ffc658"/>
        </BarChart>
      </Card>
    )
  }
}
export default MixBarChart;
