import {useState} from 'react';
import boxes from './boxes';
import Box from './Box';
import './styles.css';

function App() {

  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square)=>(
    <Box key={square.id} on={square.on}/>
  ))

  return (
    <div className="container">
        {squareElements}
    </div>
  );
}

export default App;
