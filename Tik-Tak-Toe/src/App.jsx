
import './App.css'
import { useState } from "react"
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState('Next player: X');

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for(let i = 0; i < squares.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = ((index) => {

    const newBoard = board.slice();

    if(calculateWinner(newBoard) || newBoard[index]){
      return;
    }
    newBoard[index] = isXNext ? 'X' : 'O';
    setIsXNext(!isXNext);
    setStatus(`Next player : ${isXNext ? 'X' : 'O'}`);

    const winner = calculateWinner(newBoard);
    if(winner){
      setStatus(`Winner is ${winner}`)
    }else {
      setStatus(`Next player: ${isXNext} ? 'X' : 'O'`);
    }
  })

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setStatus('Next player: X')
  }


  return (
    <div className="App">
      <h1>Tik-Tac-Toe</h1>
     <div className="status">{status}</div>
      <Board squares={board} onClick={handleClick} />
     <button className='reset' onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default App
