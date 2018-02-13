import React from "react";
import { render } from "react-dom";
import "./styles/app.css";
import Board from "./components/Board";

const App = () =>
  <div>
    <Board />
  </div>;

render(<App />, document.getElementById("app"));
