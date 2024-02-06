import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Polling.css';
function Polling() {
  const navigate = useNavigate();

  // Use state to manage poll data
  const [pollData, setPollData] = useState({
    mango: 0,
    apple: 0,
    orange: 0,
    banana: 0,
  });

  // Function to handle vote
  const handleVote = (pollOption) => {
    setPollData((prevData) => ({
      ...prevData,
      [pollOption]: prevData[pollOption] + 1,
    }));
  };

  // Function to handle logout
  const handleLogout = () => {
    // Navigate to the home page on logout
    navigate('/');
  };

  return (
    <div>
      <h2>Polling Page</h2>

      {/* Mango Poll */}
      <div>
        <h3>Mango Poll</h3>
        <p>{`Votes: ${pollData.mango}`}</p>
        <button onClick={() => handleVote('mango')}>Vote</button>
      </div>

      {/* Apple Poll */}
      <div>
        <h3>Apple Poll</h3>
        <p>{`Votes: ${pollData.apple}`}</p>
        <button onClick={() => handleVote('apple')}>Vote</button>
      </div>

      {/* Orange Poll */}
      <div>
        <h3>Orange Poll</h3>
        <p>{`Votes: ${pollData.orange}`}</p>
        <button onClick={() => handleVote('orange')}>Vote</button>
      </div>

      {/* Banana Poll */}
      <div>
        <h3>Banana Poll</h3>
        <p>{`Votes: ${pollData.banana}`}</p>
        <button onClick={() => handleVote('banana')}>Vote</button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Polling;
