import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");
console.log('gameStatus: ', gameStatus)
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ tentativeGuess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== 'running'}
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title="Please use a 5 letter word"
          value={tentativeGuess}
          id="guess-input"
          type="text"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;