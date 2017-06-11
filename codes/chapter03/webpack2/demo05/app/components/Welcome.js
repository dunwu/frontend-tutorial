/**
 * Created by victor zhang on 2017/6/8.
 */
import React from 'react';

const Welcome = React.createClass({
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
export default Welcome;
