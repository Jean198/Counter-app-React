
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  
  const [count, setCount]=useState(0)
   
  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }


  return (
    <div className="App">

      <button onClick={increment}>+1</button>
      <p>{count}</p>
      <button onClick={decrement}>-1</button>
      
      
    </div>
  );
}

export default App;
