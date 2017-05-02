import React from "react";
import {render} from "react-dom";

render((
  <div>
    <h1>Hello, React!</h1>
    <p>技术点：</p>
    <ul>
      <li>react</li>
      <li>npm</li>
      <li>webpack</li>
    </ul>
  </div>
), document.getElementById('app'));
