/**
 * Created by victor zhang on 2017/6/8.
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
      .then(moment => moment().format("MMMM Do YYYY, h:mm:ss a"))
      .then(str => this.setState({ date: str }))
      .catch(err => console.log("Failed to load moment", err));
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date}.</h2>
        <p onClick={this.click}>Click here to changing the time.</p>
      </div>
    );
  }
}

class Welcome extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <img src={lionPng}/>
        <Clock />
      </div>
    );
  }
}
export default Welcome;
