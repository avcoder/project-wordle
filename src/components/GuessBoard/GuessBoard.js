import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import { checkGuess } from '../../game-helpers.js'

function GuessBoard({ guesses, answer }) {
  const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length

  return (
    <div className="guess-results">
      {
        guesses.slice(0, NUM_OF_GUESSES_ALLOWED).map((guess, i) => (
          <p className="guess" key={i}>
            {
              checkGuess(guess, answer).map((letterStatus, idx) => (
                <span key={idx} className={`cell ${letterStatus.letter === ' ' ? '' : letterStatus.status}`}>{letterStatus.letter}</span>
              ))
            }
          </p>
        ))
      }
      {
        guesses.length < NUM_OF_GUESSES_ALLOWED ? (
          <>
            {
              Array(NUM_OF_GUESSES_ALLOWED - guesses.length).fill('').map((row, index) => (
                <p key={index} className="guess">
                  <span className="cell"></span>
                  <span className="cell"></span>
                  <span className="cell"></span>
                  <span className="cell"></span>
                  <span className="cell"></span>
                </p>
              ))
            }
          </>
        ) : null
      }
    </div>
  );
}

export default GuessBoard;
