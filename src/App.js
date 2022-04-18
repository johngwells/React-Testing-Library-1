import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';
  const [text, setText] = useState('blue');
  const newText = text === 'red' ? 'blue' : 'red';
  const handleClick = (e) => {
    setColor(newColor);
    setText(newText);
  }

  return (
    <div className="App">
      <button onClick={handleClick} style={{ backgroundColor: color}}>{`change to ${text}`}</button>
    </div>
  );
}

export default App;
