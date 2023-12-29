import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CountComponent from './Components/CountComponent'
import SecondComponent from './Components/SecondComponent';

function App() {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(pre => pre + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <CountComponent />
        <SecondComponent />
      </header>
    </div>
  );
}

export default App;
