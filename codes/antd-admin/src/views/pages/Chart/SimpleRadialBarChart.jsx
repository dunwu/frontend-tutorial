/**
 * Created by Zhang Peng on 2017/7/7.
 */
import React from 'react';
import { Legend, RadialBar, RadialBarChart } from 'recharts';

const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' }
];
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};
class SimpleRadialBarChart extends React.PureComponent {
  state = {
    activeIndex: 0,
  };

  constructor() {
    super();
  }

  onPieEnter(index) {
    this.state.activeIndex = index;
  }

  render() {
    return (
      <RadialBarChart width={500} height={350} innerRadius={20} outerRadius={140} barSize={10}
                      data={data} style={{ margin: "0 auto" }}>
        <RadialBar minAngle={15} label background clockWise={true} dataKey='uv' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
      </RadialBarChart>
    )
  }
}
export default SimpleRadialBarChart;
