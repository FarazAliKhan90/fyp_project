import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaUserMd, FaBoxes, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/EnrollNewStaff");
  };

  const handleRecordClick = () => {
    navigate("/StaffRecord");
  };

  const handleAttendanceClick = () => {
    navigate("/Attendance");
  };

  return (
    <div className="bpp">
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h2>🏥 Welcome Admin</h2>
        <p>Complete overview of hospital operations and staff management</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <FaUserPlus className="summary-icon" />
          <h2>35</h2>
          <p>Total Staff</p>
        </div>
        <div className="summary-card">
          <FaUserMd className="summary-icon" />
          <h2>18</h2>
          <p>Doctors On-Duty</p>
        </div>
        <div className="summary-card">
          <FaBoxes className="summary-icon" />
          <h2>5</h2>
          <p>Low Stock Alerts</p>
        </div>
        <div className="summary-card">
          <FaClipboardList className="summary-icon" />
          <h2>3</h2>
          <p>Pending Approvals</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="dashboard-graph">
        <h3>📊 Patient Volume (This Week)</h3>
        <img
          src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Patients',data:[12,19,3,5,2,3,10]}]}}"
          alt="Patient Graph"
        />
      </div>

      {/* Reminders */}
      <div className="reminder-card">
        <h4>🗓️ Today's Hospital Activity</h4>
        <ul>
          <li>🩺 2 Doctor Reports Pending</li>
          <li>📦 Pharmacy Stock Request Sent</li>
          <li>👥 Staff Meeting at 4:00 PM</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="dashboard-actions">
        <div className="action-card highlight">
          <button className="enroll-btn" onClick={handleEnrollClick}><h3>Enroll Now</h3></button>
          <p className="tee">Enroll New Staff</p>
        </div>
        <div className="action-card">
          <button className="enroll-btn" onClick={handleAttendanceClick}><h3>View Attendance</h3></button>
          <p className="tee">Monitor staff punctuality</p>
        </div>
        <div className="action-card">
          <button className="enroll-btn" onClick={handleRecordClick}><h3>View Records</h3></button>
          <p className="tee">Doctor evaluations & patient logs</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;