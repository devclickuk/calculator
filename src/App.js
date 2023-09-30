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

  const operatorPressed = (e) => {
    setDisplay(display + e.target.innerText);
  }

  const equalsPressed = () => {
    const result = eval(display);
    setDisplay(result);
  }

  const actionPressed = (action) => {
    switch (action) {
      case '%':
        setDisplay(display / 100);
        break;
      case 'CE':
        setDisplay(0);
        break;
      case 'C':
        setDisplay(0);
        break;
      case '<-':
        if (display.length === 1) {
          setDisplay(0);
          return;
        }
        setDisplay(display.slice(0, -1));
        break;
      case '1/x':
        setDisplay(1 / display);
        break;
      case 'x^2':
        setDisplay(display * display);
        break;
      case '√':
        setDisplay(Math.sqrt(display));
        break;
      case '+/-':
        setDisplay(display * -1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className='header'>
        <span className='history'>0</span>
        <span className='display'>{display}</span>
      </div>
      <div className='numbersContainer'>
        <div className='calcButton altButton' onClick={() => actionPressed('%')}>%</div>
        <div className='calcButton altButton' onClick={() => actionPressed('CE')}>CE</div>
        <div className='calcButton altButton' onClick={() => actionPressed('C')}>C</div>
        <div className='calcButton altButton' onClick={() => actionPressed('<-')}>&lt;-</div>
        <div className='calcButton altButton' onClick={() => actionPressed('1/x')}>1/x</div>
        <div className='calcButton altButton' onClick={(e) => operatorPressed(e)}>x<sup>2</sup></div>
        <div className='calcButton altButton' onClick={() => actionPressed('√')}>√</div>
        <div className='calcButton altButton' onClick={(e) => operatorPressed(e)}>/</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>7</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>8</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>9</div>
        <div className='calcButton altButton' onClick={(e) => operatorPressed(e)}>*</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>4</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>5</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>6</div>
        <div className='calcButton altButton' onClick={(e) => operatorPressed(e)}>-</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>1</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>2</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>3</div>
        <div className='calcButton altButton' onClick={(e) => operatorPressed(e)}>+</div>
        <div className='calcButton' onClick={() => actionPressed('+/-')}>+/-</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>0</div>
        <div className='calcButton' onClick={(e) => numberPressed(e)}>.</div>
        <div className='calcButton  equalsButton' onClick={() => equalsPressed()}>=</div>

      </div>
    </div>
  );
}

export default App;
