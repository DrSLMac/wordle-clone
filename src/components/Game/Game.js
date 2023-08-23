import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from '../GuessInput'
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from '../../game-helpers';


function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = useState('running')
  const [guesses, setGuesses] = useState([])

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses);
  
    if (tentativeGuess === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }
  
  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  const validatedGuesses = guesses.map((guess) =>
  checkGuess(guess, answer)
);



  return (
    <>
      <GuessResults 
        validatedGuesses={validatedGuesses} 
        answer={answer} 
      />
      <GuessInput 
        gameStatus={gameStatus} 
        handleSubmitGuess={handleSubmitGuess} 
      />
      <Keyboard validatedGuesses={validatedGuesses}/>
      {gameStatus === 'won' && (
        <WonBanner 
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner 
          answer={answer} 
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
