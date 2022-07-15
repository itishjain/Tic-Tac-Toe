import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoves = current.board.every((val) => val !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoves &&
        `Next Turn of player  ${current.isXNext ? "X" : "O"} `}
      {!winner && noMoves && `The match between X and O Tied`}
    </h2>
  );
};

export default StatusMessage;
