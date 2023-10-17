import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';


function MyButton() {
  const handleClick = () => {
    window.location.href = "https://github.com/ZiaoLiu-1/Leetcode/tree/main/dynamic-programming/121";
  };
  
  return (
    <button onClick={handleClick}>
      Go to Example.com
    </button>
  );
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton />

        <MyButton />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
