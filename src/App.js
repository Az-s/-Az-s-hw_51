import './App.css';
import RandomNumbers from './componets/RandomNumbers';

const App = () => {
  return (
    <div className="App">
      <button className="btn" onClick={genRandomNumbers}>Generate Numbers</button>
      <div className="numbers">
        <div className="round">{numbers[0]}</div>
        <div className="round">{numbers[1]}</div>
        <div className="round">{numbers[2]}</div>
        <div className="round">{numbers[3]}</div>
        <div className="round">{numbers[4]}</div>
      </div>
    </div>
  );
}

export default App;
