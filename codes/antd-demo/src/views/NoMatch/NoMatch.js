/**
 * Created by victor zhang on 2017/4/24.
 */
import React from "react";

export default class NoMatch extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{background: '#ECECEC', padding: '30px'}}>
        <h1>404: No match path</h1>
      </div>
    )
  }
}
