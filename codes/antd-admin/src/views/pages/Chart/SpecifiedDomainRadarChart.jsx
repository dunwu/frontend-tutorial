/**
 * Created by victor zhang on 2017/7/7.
 */
import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

class SpecifiedDomainRadarChart extends React.PureComponent {
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
      <RadarChart outerRadius={150} width={500} height={350} style={{ margin: "0 auto" }}
                  data={data}>
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
      </RadarChart>
    )
  }
}
export default SpecifiedDomainRadarChart;
