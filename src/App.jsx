import React from "react";
import Board from "./Components/Board";
import "./Styles/root.scss";

// {/* Note => A component always return a single element. Inside <>...</>  */}
const Application = () => {
  return (
    <div className="app">
      {/* <></> This is called react-fragment can also be written as <React.Fragment></React.Fragment>  */}
      {/* It looks like HTML syntax but it is not. It's jsx and its a react syntax.
              It is backword compatible with HTML*/}
      {/* We can also put components inside div rather than using React Fragment(<></>) */}
      <h1 className="heading">Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default Application;
