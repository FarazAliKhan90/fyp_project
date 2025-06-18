import React, { useState } from "react";
import "./Attendance.css";

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const attendanceData = []; // Empty for now

  const filteredAttendance = attendanceData.filter((record) => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || record.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="attendance-record-container">
      <div className="attendance-header">
        <h2>📅 Attendance Record</h2>
        <p>Search, filter and view daily staff attendance</p>
      </div>

      {/* 🔍 Search & Filter */}
      <div className="attendance-filter-section">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="All">All Roles</option>
          <option value="Doctor">Doctor</option>
          <option value="Nurse">Nurse</option>
          <option value="Receptionist">Receptionist</option>
        </select>
      </div>

      {/* 📋 Attendance Table */}
      <div className="attendance-table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Staff ID</th>
              <th>Role</th>
              <th>Department</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.map((record, index) => (
              <tr key={record.id + record.date}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td>{record.id}</td>
                <td>{record.role}</td>
                <td>{record.department}</td>
                <td>{record.date}</td>
                <td>
                  <span className={`badge ${record.status.toLowerCase().replace(" ", "-")}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredAttendance.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                  No attendance records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
