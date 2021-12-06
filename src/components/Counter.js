import React, { useEffect, useState } from 'react';

function Counter() {

  const [inputNumber, setInputNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  

  useEffect(() => {
    if (inputNumber <= 100) {
      setAnswer("Iterates in multiples of '7' up till 100")
    } else if (inputNumber <= 200) {
      setAnswer("Iterates in multiples of '8' up till 200")
    } else if (inputNumber < 300) {
      setAnswer("Iterates in multiples of '9' up till 300")
    } else {
      setAnswer("You've reached 300!");
    }
  }, [inputNumber])

  const handleIncrease = () => {
    if (inputNumber <= 100) {
        let newNum = inputNumber + 7
        setInputNumber(newNum)
    } else if (inputNumber > 100 && inputNumber <= 200) {
        let newNum = inputNumber + 8
        setInputNumber(newNum)
    } else if (inputNumber > 200 && inputNumber < 300) {
        let newNum = inputNumber + 9
        setInputNumber(newNum)
    }
  }

  const handleReset = () => {
    let newNum = 0;
    setInputNumber(newNum);
    
  }

  return (
    <>

      <button className="plus" onClick={handleIncrease}> + </button>
      <button onClick={handleReset}> Reset </button>
      <hr></hr>
      <h2>Number is: <span>{inputNumber}</span></h2>
      <h2><span>{answer}</span></h2>
    </>
  );
}

export default Counter;
