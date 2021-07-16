import { useState } from 'react';

const RandomNumbers = () => {
    const [numbers, setNumbers] = useState(0);

    const genRandomNumbers = () => {
      let numbers = [];
      let randomQuanity, recNumbers;
      randomQuanity = 5;
      let min = 5;
      let max = 36;
      
      for (let i = 0; i < randomQuanity; i++) {
        do {
          let randomNumber = Math.floor(Math.random() * (max - min)) + min;
          recNumbers = numbers.includes(randomNumber);
          if (!recNumbers) {
            numbers.push(randomNumber);
            numbers.sort((a, b) => a - b);
            setNumbers(numbers);          
            console.log(numbers)
          }
        }
        while (recNumbers);
      }
    };
  
    return (
      <>
        <button className="btn" onClick={genRandomNumbers}>Generate Numbers</button>
        <div className="numbers">
          <div className="round">{numbers[0]}</div>
          <div className="round">{numbers[1]}</div>
          <div className="round">{numbers[2]}</div>
          <div className="round">{numbers[3]}</div>
          <div className="round">{numbers[4]}</div>
        </div>
      </>
    );
}

export default RandomNumbers;
