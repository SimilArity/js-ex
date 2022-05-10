import {useState} from 'react';
import boxes from './boxes';
import Box from './Box';
import './styles.css';

function App() {

  const [squares, setSquares] = useState(boxes);

  function toggle(id){
    setSquares(prevSquares=>{
      return prevSquares.map((square)=>{
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map((square)=>(
    <Box key={square.id} id={square.id} on={square.on} handleClick={toggle}/>
  ))

  return (
    <div className="container">
        {squareElements}
    </div>
  );
}

export default App;
