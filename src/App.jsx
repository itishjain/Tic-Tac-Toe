import React, { useState } from "react";
import Board from "./Components/Board";
import "./Styles/root.scss";
import { Winner } from "./winning_logic";

// {/* Note => A component always return a single element. Inside <>...</>  */}
const Application = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = Winner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Turn of player  ${isXNext ? "X" : "O"} `;

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };

  return (
    <div className="app">
      {/* <></> This is called react-fragment can also be written as <React.Fragment></React.Fragment>  */}
      {/* It looks like HTML syntax but it is not. It's jsx and its a react syntax.
              It is backword compatible with HTML*/}
      {/* We can also put components inside div rather than using React Fragment(<></>) */}
      <h1 className="heading">Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default Application;
