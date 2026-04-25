import { useState } from "react";
import "./App.css";

function App() {
 
const [counter,setCounter]=useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    if(counter>=1)
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <div className="box">
        <h2>Counter</h2>

        <div className="counter">
          <button onClick={decrement}>-1</button>
          <span className="quantity">{counter}</span>
          <button onClick={increment}>+1</button>
        </div>
        <p>Total Count: {counter}</p>
      </div>
    </div>
  );
}

export default App;