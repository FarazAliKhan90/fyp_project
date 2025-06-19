import React, { useState, useEffect } from "react";
import "./StaffRecord.css";

const StaffRecord = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem("enrolledStaff")) || [];
    setStaffList(storedStaff); 
  }, []);

  const filteredStaff = staffList.filter((staff) => {
    const matchesSearch = staff.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || staff.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="staff-record-container">
      <div className="staff-header">
        <h2>👨‍⚕️ Staff Directory</h2>
        <p>Search, filter and view hospital staff</p>
      </div>

      {/* 🔍 Search & Filter */}
      <div className="staff-filter-section">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="All">All Roles</option>
          <option value="Doctor">Doctor</option>
          <option value="PA">Personal Assistant</option>
          <option value="Pharmacist">Pharmacist</option>
          <option value="Receptionist">Receptionist</option>
        </select>
      </div>

      {/* 📋 Staff Table */}
      <div className="staff-table-container">
        <table className="staff-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.length > 0 ? (
              filteredStaff.map((staff, index) => (
                <tr key={staff.id}>
                  <td>{index + 1}</td>
                  <td>{staff.email}</td>
                  <td>{staff.role}</td>
                  <td>
                    <span className="badge active">Active</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffRecord;
