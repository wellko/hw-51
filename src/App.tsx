import React, {useState} from 'react';
import './App.css';
import Ball from './Ball/Ball';


function App() {
    const [ballNumber , setBallNumber] = useState<number[]>([
    ]);
    const addNumber = () => {
        setBallNumber([])
    }

    return (
    <div className="App">
        <div><button onClick={addNumber}>Change name</button></div>
      <Ball number={ballNumber[0]}/>
      <Ball number={ballNumber[1]}/>
      <Ball number={ballNumber[2]}/>
      <Ball number={ballNumber[3]}/>
      <Ball number={ballNumber[4]}/>
    </div>
  );
}

export default App;
