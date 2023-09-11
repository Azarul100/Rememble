import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const {gameOver, correctWord, currAttempt} = useContext(AppContext)

    const restartGame = () => {
      document.location.reload()
    }
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You got it!" : "You failed"}</h3>
        <h3>The word was: {correctWord} </h3>
        {gameOver.guessedWord && (
            <h3>You guessed in {currAttempt.attempt} attempts</h3>
        )
        }
        <button className='button' onClick={restartGame}>Play again</button>
    </div>
  )
}

export default GameOver