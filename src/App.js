import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useEffect, useState } from 'react';
import { boardDefault, generateWordSet } from './Words';
import GameOver from './components/GameOver';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set())
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })
  const [correctWord, setCorrectWord] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardShake, setBoardShake] = useState(false);
  const [colorSchemes, setColorSchemes] = useState([]);
  const [endGame, setEndGame] = useState("");

  

  const helpModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.chosenWord);
    })
  }, [])

  useEffect(() => {
    if (currAttempt.attempt > 0) {
      const newColorSchemes = generateColorSchemeForHistory(board, correctWord, currAttempt.attempt);
      setColorSchemes(newColorSchemes);
    }
  }, [board, correctWord, currAttempt]);

  const generateColorSchemeForHistory = (board, correctWord, attempts) => {
    const colorSchemes = [];
    for (let i = 0; i < attempts; i++) {
      const emojis = [];
      for (let j = 0; j < 5; j++) {
        const letter = board[i][j].toLowerCase();
        const correctLetter = correctWord.charAt(j).toLowerCase();
        if (letter === correctLetter) {
          emojis.push("🟩"); // Green for correct
        } else if (correctWord.toLowerCase().includes(letter)) {
          emojis.push("🟨"); // Yellow for almost correct
        } else {
          emojis.push("⬛"); // Red for error
        }
      }
      colorSchemes.push(emojis);
    }
    return colorSchemes;
  };

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) {
      return;
    }
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) {
      return;
    }
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) {
      return;
    }

      setBoardShake(false);

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i].toLowerCase();
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
    }
    else {
      // alert("word not found")
      setBoardShake(true)

      setTimeout(() => {
        setBoardShake(false);
      }, 500); // 1000ms (1 second) delay
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true })
      setEndGame(currAttempt.attempt + 1)
      return;
    }

    if (currAttempt.attempt === 5) {
      let currWord2 = "";
      for (let i = 0; i < 5; i++) {
        currWord2 += board[currAttempt.attempt][i].toLowerCase();
      }
      if (wordSet.has(currWord2.toLowerCase())) {
        setGameOver({ gameOver: true, guessedWord: false });
        setEndGame("X")
      } else {
        return;
      }
    }

  };

  return (
    <div className='App'>
      <div className='gameContent'>
      <nav>
        <h2>Rememble</h2>
        {/* <p className='help'>test</p> */}
        <div className='help-wrapper'>
          <HelpOutlineRoundedIcon onClick={helpModal} />
        </div>
      </nav>
      <AppContext.Provider value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onDelete,
        onEnter,
        onSelectLetter,
        correctWord,
        gameOver,
        setGameOver,
        isModalOpen, 
        setIsModalOpen,
        boardShake, 
        setBoardShake,
        colorSchemes,
        endGame
      }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
      {/* <h2>{correctWord}</h2> */}

      <Modal
        open={isModalOpen}
        onClose={helpModal}
        aria-labelledby="help-modal-title"
        aria-describedby="help-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: '#121212',
            color: 'white',
            boxShadow: 'none',
            border: 'black',
            p: 4,
            width: '80%',
            height: 'fit-content',
            maxWidth: 1000, // Set maximum width for the modal
          }}
        >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '-20px',
            cursor: 'pointer',
          }}
        >
          <CloseIcon onClick={helpModal} />
        </div>

          <h1 className='modalh1' id="help-modal-title">How to Play</h1>
          <p className='modalp' id="help-modal-description">Just like the classic wordle game, you must guess a hidden five-letter word, but with each attempt, the previous row vanishes, leaving you to rely on memory alone for the next guess.</p>
          <br/>
          <span className='disclaimer'>Disclaimer:</span> <span className='dtext'>There is a bug where if you guess a word with repeated letters, and that letter is in the actual word, all instances of the repeated letter will be color-coded, even if the letter appears once in the actual word. </span>
        </Box>

      </Modal>
      </div>
    </div>
  );
}

export default App;
