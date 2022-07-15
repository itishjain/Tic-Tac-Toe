import React from "react";

const History = ({ history, historyOf, currMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currMove ? "bolder" : "normal",
                fontSize: move === currMove ? 22 : 15,
                color: move === currMove ? "crimson" : "grey",
              }}
              type="button"
              onClick={() => {
                historyOf(move);
              }}
            >
              {move === 0
                ? `No History at present, Start the game.`
                : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
