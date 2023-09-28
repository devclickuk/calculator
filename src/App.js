import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(0);

  const numberPressed = (e) => {
    if (display === 0) {
      setDisplay(e.target.innerText);
      return;
    }
    if (display.includes('.') && e.target.innerText === '.') return;
    setDisplay(display + e.target.innerText);
  }

  return (
    <div className="container">
      <div className='header'>
        <span className='history'>0</span>
        <span className='display'>{display}</span>
      </div>
      <div className='numbersContainer'>
        <div className='calcButton altButton'>%</div>
        <div className='calcButton altButton'>CE</div>
        <div className='calcButton altButton'>C</div>
        <div className='calcButton altButton'>&lt;-</div>
        <div className='calcButton altButton'>1/x</div>
        <div className='calcButton altButton'>x<sup>2</sup></div>
        <div className='calcButton altButton'>√</div>
        <div className='calcButton altButton'>/</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>7</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>8</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>9</div>
        <div className='calcButton altButton'>*</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>4</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>5</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>6</div>
        <div className='calcButton altButton'>-</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>1</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>2</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>3</div>
        <div className='calcButton altButton'>+</div>
        <div className='calcButton'>+/-</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>0</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>.</div>
        <div className='calcButton  equalsButton'>=</div>

      </div>
    </div>
  );
}

export default App;
