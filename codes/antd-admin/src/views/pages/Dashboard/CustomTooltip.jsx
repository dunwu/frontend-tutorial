/**
 * Created by victor zhang on 2017/7/10.
 */
import PropTypes from 'prop-types';
import React from 'react';
import './Dashboard.less';

export default class CustomTooltip extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array,
  };

  getIntroOfPage(name) {
    if (name === 'Monday') {
      return "星期一";
    } else if (name === 'Tuesday') {
      return "星期二";
    } else if (name === 'Wednesday') {
      return "星期三";
    } else if (name === 'Thursday') {
      return "星期四";
    } else if (name === 'Friday') {
      return "星期五";
    } else if (name === 'Saturday') {
      return "星期六";
    } else if (name === 'Sunday') {
      return "星期天";
    }
  }

  render() {
    const { active } = this.props;
    if (active) {
      const { payload } = this.props;
      const name = payload[0].payload.name;
      return (
        <div className="custom-tooltip">
          <p className="label">{name}</p>
          <p className="intro">{this.getIntroOfPage(name)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }

    return null;
  }
}

