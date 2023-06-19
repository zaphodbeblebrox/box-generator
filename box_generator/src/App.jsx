import logo from './logo.svg';
import './App.css';
import ColorForm from './components/ColorForm';
import Boxes from './components/boxes';
import { useState } from 'react';

function App() {
  // const [boxes, setBoxes] = useState(["red"])
  const [boxes, setBoxes] = useState([{color:"red", size: "100px"}])

  return (
    <div className="App">
      <ColorForm boxes={boxes} setBoxes={setBoxes}/>
      <Boxes boxes={boxes}/>
    </div>
  );
}

export default App;
