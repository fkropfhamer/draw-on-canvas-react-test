import './App.css';
import {useRef, useState} from 'react';
import DrawOnCanvas from 'draw-on-canvas-react'

function App() {
  const ref = useRef()

  return (
    <div className="App">
      <DrawOnCanvas width={300} height={200} strokeColor={'green'} strokeWeight={20} ref={ref}/>
      <button onClick={() => ref.current.draw.reset()}>Reset</button>
      <button onClick={() => console.log(ref.current.draw.getPixelArray())}>GET</button>
      <button onClick={() => ref.current.draw.changeStrokeColor('red')}>change Color</button>
    </div>
  );
}

export default App;
