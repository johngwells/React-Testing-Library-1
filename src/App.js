import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';
  const [text, setText] = useState('blue');
  const newText = text === 'red' ? 'blue' : 'red';
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    setColor(newColor);
    setText(newText);
  }

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <div className="App">
      <button onClick={handleClick} style={{ color: 'white', backgroundColor: color}} disabled={checked}>{`change to ${text}`}</button>
      <input onChange={handleChange} defaultChecked={checked} type='checkbox' />
    </div>
  );
}

export default App;
