import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const {gameOver, correctWord, currAttempt, colorSchemes, endGame} = useContext(AppContext)
    const [copied, setCopied] = useState(false); 


    const restartGame = () => {
      document.location.reload()
    }

    const copyGameInfoToClipboard = () => {
      let gameInfo = `Rememble ${endGame}/6 \n`;
    
      for (let i = 0; i < colorSchemes.length; i++) {
        const emojis = colorSchemes[i];
        const emojiText = emojis.join('');
        gameInfo += `\n${emojiText}`;
      }
    
      // Create a temporary textarea element to copy the text
      const textArea = document.createElement('textarea');
      textArea.value = gameInfo;
      document.body.appendChild(textArea);
    
      // Select the text in the textarea and copy it to the clipboard
      textArea.select();
      document.execCommand('copy');
    
      // Remove the temporary textarea element
      document.body.removeChild(textArea);
    
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
    
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You got it!" : "You failed"}</h3>
        <h3>The word was: {correctWord} </h3>
        {gameOver.guessedWord && (
            <h3>You guessed in {currAttempt.attempt} attempts</h3>
        )
        }
        <div className='buttonArea'>
        <button className='buttonS' onClick={copyGameInfoToClipboard}>
          {copied ? 'Copied!' : 'Share'}
        </button>
          <button className='button' onClick={restartGame}>Play again</button>
        </div>
    </div>
  )
}

export default GameOver



