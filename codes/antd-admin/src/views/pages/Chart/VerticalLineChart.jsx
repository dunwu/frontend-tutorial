/**
 * Created by Administrator on 2017/7/6.
 */
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

class VerticalLineChart extends React.PureComponent {
  render() {
    return (
      <LineChart layout="vertical" width={700} height={350} data={data} style={{ margin: "0 auto" }}>
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line dataKey="pv" stroke="#8884d8" />
        <Line dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )
  }
}
export default VerticalLineChart;
