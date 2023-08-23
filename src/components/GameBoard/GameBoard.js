import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
 
  const className = status ? `cell ${status}` : "cell";
  return (
    <span className={className}>
      {letter}
    </span>
  );
}

function GameBoard({ value, answer }) {
  const result = checkGuess(value, answer);

  // console.log("result: ", result);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : null}
          status={result ? result[num].status : null}
        />
      ))}
    </p>
  );
}

export default GameBoard;
