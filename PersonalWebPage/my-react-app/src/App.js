import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import myImage from './selfie.jpg';
import Calendar from './Calendar';
import DisplayBoard from './DisplayBoard';
import NewPage from './NewPage';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';


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


function RoutesComponent() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newpage">New Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />  {/* This is the redirect */}
      </Routes>
    </Router>
  );
}


function HomePage() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="App-header" style={{ padding: '20px' }}>
      {showCalendar && <div className="overlay" onClick={() => setShowCalendar(false)}></div>}
      {showCalendar && <Calendar />}
      <header className="App-header">
        <img src={myImage} alt="This is me" className="myImageClass" />
        <p>
          Welcome to my BLOG!
        </p>
        <LeetCodeButton />
        <button className='niceButton' onClick={() => setShowCalendar(!showCalendar)}>
          My TODO List
        </button>
      </header>
    </div>
  );
}
function App() {
  return (
    <div>
      <RoutesComponent />
    </div>
  );
}

export default App;
