import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className='App'>
      <nav>
        <h2>Rememble</h2>
      </nav>
      <Board/>
      <Keyboard/>
    </div>
  );
}

export default App;
