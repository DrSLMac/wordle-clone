import React from "react";
import GameBoard from "../GameBoard/GameBoard";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function GuessResults({ validatedGuesses, answer }) {
  return (
    <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) =>(
      <GameBoard  key={num} value={validatedGuesses[num]} answer={answer}/>
     
    ))}
    </div>
  );
}

export default GuessResults;
