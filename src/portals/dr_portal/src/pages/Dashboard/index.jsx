import React, { useState, useEffect } from "react";
import Patientgraph from "../../components/Graph/Patientgraph.jsx";
import "./Dashboard.css";

const Dashboard = ({ alertMessages }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="right-content">
      <div className="time-date-bar">
        🕒 {currentTime.toLocaleTimeString()} | 📅 {currentTime.toLocaleDateString()}
      </div>

      <div className="dashboard-row">
        <div className="dashboard-col">
          <div className="appointBox alert-box">
            <h4 className="text-dark">Alert Announcements:</h4>
            <ul>
              {alertMessages.length > 0 ? (
                alertMessages.map((msg, index) => <li key={index}>{msg}</li>)
              ) : (
                <p>No new alerts.</p>
              )}
            </ul>
          </div>

          <div className="appointBox extra-box">
            <h4 className="text-dark">Additional Info</h4>
            <p>Extra details or notifications can go here.</p>
          </div>
        </div>

        <div className="dashboard-col">
          <div className="appointBox graph-box">
            <h4 className="text-dark">Patient Volume Over Time</h4>
            <Patientgraph />
          </div>

          <div className="appointBox extraa-box">
            <h4 className="text-dark">Extra Statistics</h4>
            <p>More analytics and stats can be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
