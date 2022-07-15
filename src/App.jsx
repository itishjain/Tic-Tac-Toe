import React, { useState } from "react";
import Board from "./Components/Board";
import History from "./Components/History";
import StatusMessage from "./Components/StatusMessage";
import "./Styles/root.scss";
import { Winner } from "./winning_logic";

// {/* Note => A component always return a single element. Inside <>...</>  */}
const Application = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));   We can use these if we dont want game history
  // const [isXNext, setIsXNext] = useState(false);

  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currMove, setCurrMove] = useState(0); // It will be just an index inside history array.

  const current = history[currMove]; // Store the history of current move.

  console.log("History : ", history);

  const winner = Winner(current.board);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrMove((prev) => prev + 1);
  };

  const historyOf = (move) => {
    setCurrMove(move);
  };
  return (
    <div className="app">
      {/* <></> This is called react-fragment can also be written as <React.Fragment></React.Fragment>  */}
      {/* It looks like HTML syntax but it is not. It's jsx and its a react syntax.
              It is backword compatible with HTML*/}
      {/* We can also put components inside div rather than using React Fragment(<></>) */}
      <h1
        className="heading"
        style={{
          color: "deepskyblue",
          fontSize: 60,
          textDecorationLine: "underline",
        }}
      >
        Tic - Tac - Toe
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} historyOf={historyOf} currMove={currMove} />
    </div>
  );
};

export default Application;
