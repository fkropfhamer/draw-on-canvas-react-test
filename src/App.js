import './App.css';
import {useRef} from 'react';
import DrawOnCanvas from 'draw-on-canvas-react'

function App() {
  const ref = {}

  return (
    <div className="App">
      <DrawOnCanvas width={300} height={200} strokeColor={'green'} strokeWeight={20} drawReference={ref}/>
      <button onClick={() => {ref.current.reset()}}>Reset</button>
      <button onClick={() => {}}>GET</button>
    </div>
  );
}

export default App;
