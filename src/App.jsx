import React from "react";
import { render } from "react-dom";
import "./styles/app.css";
import Board from "./components/Board";


const App = () => {
 


  return (
   <div className="conatiner">
      <Board />
    </div>
  );
}

render(<App />, document.getElementById("app"));
