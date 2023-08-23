import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter a 5 letter word..."
        value={tentativeGuess}
        onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
        id="guess-input" 
        type="text" 
      />
    </form>
  );
}

export default GuessInput;
