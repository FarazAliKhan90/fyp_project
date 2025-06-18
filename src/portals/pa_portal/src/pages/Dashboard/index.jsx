import React from "react";
import Patientgraph from "../../components/Graph/Patientgraph.jsx";
const Dashboard = ({ alertMessages }) => {  
  return (
    <div className="right-content w-100">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-6">
          <div className="box appointBoxx" 
            style={{ height: "250px", backgroundColor: "burlywood", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", overflowY: "auto" }}>
            
            <h4 className='text-dark'>Alert Announcements:</h4>
            <ul>
              {alertMessages.length > 0 ? (
                alertMessages.map((msg, index) => <li key={index}>{msg}</li>)
              ) : (
                <p>No new alerts.</p>
              )}
            </ul>
          </div>
        </div>

        <div className="col-md-6 pl-0">
          <div className="box appointBox" 
            style={{ height: "400px", backgroundColor: "burlywood", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            
            <h4 className='text-dark'>Patient Volume Over Time</h4>
            <Patientgraph />  
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
