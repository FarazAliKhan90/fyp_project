import React, { useState } from 'react';
import "./TaskManager.css";

const TaskManager = ({ addAlertMessage }) => { 
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() !== "") {
      addAlertMessage(message);  
      setMessage("");  
    }
  };

  return (
    
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Alert</h2>
        </div>
        <div className="card-body">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter alert details..."
          ></textarea>
        </div>
        <div className="card-footer">
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
