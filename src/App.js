import React, { useState } from 'react';
import BoxDisplay from './components/BoxDisplay';
import BoxForm from './components/BoxForm';
import './App.css';

function App() {
  
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <h1>Hello Welcome</h1>
      <p>Create some colored boxes, add height and color!</p>
      <BoxDisplay boxes={boxes} setBoxes={setBoxes} />
      <BoxForm boxes={boxes} setBoxes={setBoxes}/>
      
    </div>
  );
}

export default App;
