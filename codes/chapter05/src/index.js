import React from "react";
import {render} from "react-dom";
import MyRoute from "./routes";
import "./index.css";

render((
  <MyRoute/>
), document.getElementById('app'));
