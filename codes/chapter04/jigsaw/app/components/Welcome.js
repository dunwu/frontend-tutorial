/**
 * Created by Zhang Peng on 2017/6/8.
 */
import React from 'react';
import lionPng from './lion.png';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleDateString() };
    this.click = this.click.bind(this);
  }

  click() {
    // 动态引入import()
    import('moment')
      .then(moment => moment().format('yyyy-MM-dd HH:mm:ss'))
      .then(str => this.setState({ date: str }))
      .catch(err => console.log('Failed to load moment', err));
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date}.</h2>
        <button onClick={this.click}>Click here to changing the time.</button>
      </div>
    );
  }
}

class Welcome extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <img alt="lion.png" src={lionPng} />
        <Clock />
      </div>
    );
  }
}
export default Welcome;
