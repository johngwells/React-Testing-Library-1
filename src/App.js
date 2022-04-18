import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';
  const [text, setText] = useState('blue');
  const newText = text === 'red' ? 'blue' : 'red';
  const [checked, setChecked] = useState(false);
  const disabled = checked === true ? false : true;

  const handleClick = (e) => {
    setColor(newColor);
    setText(newText);
  }

  const handleChange = () => {
    setChecked(disabled);
  }

  return (
    <div className="App">
      <button onClick={handleClick} style={{ color: 'white', backgroundColor: color}}>{`change to ${text}`}</button>
      <input onChange={handleChange} checked={checked} type='checkbox' />
    </div>
  );
}

export default App;
