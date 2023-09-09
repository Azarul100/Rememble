import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const {gameOver, setGameOver, correctWord, currAttempt} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You got it!" : "You failed"}</h3>
        <h3>The Word was: {correctWord} </h3>
        {gameOver.guessedWord && (
            <h3>You guessed in {currAttempt.attempt} attempts</h3>
        )

        }
    </div>
  )
}

export default GameOver