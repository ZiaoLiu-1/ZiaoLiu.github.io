// DisplayBoard.js

import React, { useState } from 'react';
import './DisplayBoard.css';  // Optional: If you're adding styles specific to this component.

function DisplayBoard() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState(''); 

  const handleSubmit = () => {
    if (input) {
      setPosts([...posts, input]);
      setInput('');
    }
  };

  return (
    <div className="DisplayBoard">
      <div>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Write your post..." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayBoard;
