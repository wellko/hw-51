import React, {useState} from 'react';
import './App.css';
import Ball from './Ball/Ball';

let numbers:number[] = [];

function rightSort(a:number, b:number) {
    return a > b ? 1 : b > a ? -1 : 0;
}

const getNumbers = () =>{
    while (numbers.length < 5){
        const randomNumber:number = Math.floor(Math.random() * (32) + 5);
        let wrong = false;
        for( let i = 0; i < numbers.length; i++){
            if (numbers[i] === randomNumber){
                wrong = true;
                getNumbers();
            }
        }
        if (!wrong) {
            numbers.push(randomNumber);
            numbers.sort(rightSort);
        }
    }
}



function App() {
    const [ballNumber , setBallNumber] = useState<number[]>([
    ]);
    const addNumber = () => {
        getNumbers();
        setBallNumber(numbers);
        console.log(ballNumber)
    }

    return (
    <div className="App">
        <div><button onClick={addNumber}>New numbers</button></div>
      <Ball number={ballNumber[0]}/>
      <Ball number={ballNumber[1]}/>
      <Ball number={ballNumber[2]}/>
      <Ball number={ballNumber[3]}/>
      <Ball number={ballNumber[4]}/>
    </div>
  );
}

export default App;
