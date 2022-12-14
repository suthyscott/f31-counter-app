import './App.css';
import {useState} from 'react'
import Button from './Button';

function App() {
  const [counter, setCounter] = useState(0)
  console.log(counter)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
    <div className="App">
     
     <h2>{counter}</h2>
     <Button type='Increment' func={increment}/>
     <Button type='Decrement' func={decrement}/>
     <Button type='Reset' func={reset}/>
    </div>
  );
}

export default App;
