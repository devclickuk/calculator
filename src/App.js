import './App.css';

function App() {
  return (
    <div className="container">
      <div className='header'>
        <span className='history'>0</span>
        <span className='display'>0</span>
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
        <div className='calcButton'>7</div>
        <div className='calcButton'>8</div>
        <div className='calcButton'>9</div>
        <div className='calcButton altButton'>*</div>
        <div className='calcButton'>4</div>
        <div className='calcButton'>5</div>
        <div className='calcButton'>6</div>
        <div className='calcButton altButton'>-</div>
        <div className='calcButton'>1</div>
        <div className='calcButton'>2</div>
        <div className='calcButton'>3</div>
        <div className='calcButton altButton'>+</div>
        <div className='calcButton'>+/-</div>
        <div className='calcButton'>0</div>
        <div className='calcButton'>.</div>
        <div className='calcButton  equalsButton'>=</div>

      </div>
    </div>
  );
}

export default App;
