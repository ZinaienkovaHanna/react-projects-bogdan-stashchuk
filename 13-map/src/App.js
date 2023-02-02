import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'Click me',
  'Click me please',
  'Tell me',
  'Press me',
  'Click me again',
  'Press me!!!',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text) => (
        <Button onClick={incrementCount} text={text} key={text} />
      ))}
    </div>
  );
}

export default App;
