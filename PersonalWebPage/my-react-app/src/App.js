import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import myImage from './selfie.jpg';
import Calendar from './Calendar';
import DisplayBoard from './DisplayBoard';

function LeetCodeButton() {
  const handleClick = () => {
    window.location.href = "https://github.com/ZiaoLiu-1/Leetcode/tree/main";
  };
  
  return (
    <button className='niceButton' onClick={handleClick} >
      My solutions for LeetCode
    </button>
  );
}

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="App">
      {showCalendar && <div className="overlay" onClick={() => setShowCalendar(false)}></div>}
      {showCalendar && <Calendar />}
      
      <header className="App-header">
        <img src={myImage} alt="This is me" className="myImageClass" />
        <p>
          Welcome to my BLOG!
        </p>
        <LeetCodeButton />
        <button  className="niceButton" onClick={() => setShowCalendar(!showCalendar)}>My TODO List</button>
      </header>
      <DisplayBoard />
    </div>
  );
}

export default App;
