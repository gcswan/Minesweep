import React from "react";
import { render } from "react-dom";

const App = () =>
  <div>
    <h1>Hello, World</h1>
    <h2>This is sub header</h2>
    <p>This is a Reactjs application</p>
  </div>;

render(<App />, document.getElementById("app"));
