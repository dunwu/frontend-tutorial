/**
 * Created by victor zhang on 2017/6/8.
 */
import React from 'react';
import imgBig from './lion.png'

class Welcome extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <img src={imgBig} />
      </div>
    );
  }
}
export default Welcome;
