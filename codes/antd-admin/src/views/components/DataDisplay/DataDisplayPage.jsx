/**
 * antd 的 Data Display 组件展示页面
 * Created by Zhang Peng on 2017/7/5.
 */
import React from 'react';
import CalendarDemo from './CalendarDemo';
import CardDemo from './CardDemo';
import TimelineDemo from './TimelineDemo';

export default class DataDisplay extends React.PureComponent {

  render() {
    return (
      <div>
        <CalendarDemo/>
        <br/><br/>
        <CardDemo/>
        <br/><br/>
        <TimelineDemo/>
      </div>
    )
  }
}
