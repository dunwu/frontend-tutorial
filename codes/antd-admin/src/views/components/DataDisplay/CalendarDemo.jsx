/**
 * Created by victor zhang on 2017/7/6.
 */
import React from 'react';
import { Alert, Calendar, Card, Row } from 'antd';
import moment from 'moment';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'normal', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? <div className="notes-month">
    <section>{num}</section>
    <span>Backlog number</span>
  </div> : null;
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class CalendarDemo extends React.PureComponent {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;

    return (
      <Card title="Calendar 日历">

        <Row>
          <Card title="通知事项日历">
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
          </Card>
        </Row>
        <br/><br/>

        <Row>
          <Card title="选择功能">
            <div>
              <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}/>
              <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange}/>
            </div>
          </Card>
        </Row>
        <br/><br/>

        <Row>
          <Card title="卡片模式">
            <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </Card>
        </Row>

        <br/><br/>
      </Card>
    )
  }
}
