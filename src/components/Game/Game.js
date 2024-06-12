import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Guess from "../Guess/Guess.js";
import GuessBoard from "../GuessBoard/GuessBoard.js";
import Restart from "../Restart/Restart.js";

import { NUM_OF_GUESSES_ALLOWED, WON, PLAYING, LOST } from "../../constants.js";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState(() => {
    const answer = sample(WORDS);
    console.info(answer);
    return answer;
  });
  const [gameStatus, setGameStatus] = useState(PLAYING);

  function handleGuess(guess) {
    const newGuesses = [...guesses, guess.guess];
    if (newGuesses.includes(answer)) {
      setGameStatus(WON);
    } else if (newGuesses.length > NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus(LOST);
    }
    setGuesses(newGuesses);
  }
  function restart() {
    setAnswer(() => {
      const answer = sample(WORDS);
      console.info(answer);
      return answer;
    });
    setGuesses([]);
    setGameStatus(PLAYING);
  }

  return (
    <>
      <GuessBoard guesses={guesses} answer={answer} />
      {gameStatus === PLAYING && <Guess onGuess={handleGuess} />}
      {gameStatus === WON && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
          <Restart restart={restart} />
        </div>
      )}
      {gameStatus === LOST && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <Restart restart={restart} />
        </div>
      )}
    </>
  );
}

export default Game;
