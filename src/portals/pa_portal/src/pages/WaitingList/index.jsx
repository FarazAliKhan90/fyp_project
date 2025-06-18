import React from "react";
import "./PatientWaitingList.css";

const dummyPatients = [
  { name: "Ali Khan", id: "P001", doctor: "Dr. Ahmed", reason: "Fever", status: "pending" },
  { name: "Sara Malik", id: "P002", doctor: "Dr. Fatima", reason: "Headache", status: "pending" },
  { name: "Zain Ali", id: "P003", doctor: "Dr. Khan", reason: "Flu", status: "pending" },
  { name: "Ayesha Raza", id: "P004", doctor: "Dr. Kamran", reason: "Back Pain", status: "pending" },
  { name: "Bilal Saeed", id: "P005", doctor: "Dr. Amna", reason: "Chest Pain", status: "pending" },
  { name: "Nida Noor", id: "P006", doctor: "Dr. Hassan", reason: "Diabetes", status: "pending" },
  { name: "Hamza Tariq", id: "P007", doctor: "Dr. Rehman", reason: "Allergy", status: "pending" },
  { name: "Fatima Zubair", id: "P008", doctor: "Dr. Salman", reason: "Migraine", status: "pending" },
  { name: "Usman Farooq", id: "P009", doctor: "Dr. Zainab", reason: "Injury", status: "pending" },
  { name: "Sana Abbas", id: "P010", doctor: "Dr. Nasir", reason: "Hypertension", status: "pending" },
  { name: "Rizwan Iqbal", id: "P011", doctor: "Dr. Adeel", reason: "Stomach Pain", status: "pending" },
  { name: "Kiran Javed", id: "P012", doctor: "Dr. Sameer", reason: "Eye Infection", status: "pending" },
];

const WaitingList = () => {
  return (
    <div className="waiting-list-container">
      <h2 className="title">Patient Waiting List</h2>

      <div className="table-container">
        <table className="waiting-list-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Patient ID</th>
              <th>Doctor Assigned</th>
              <th>Reason</th>
              <th>Current Status</th>
              <th>Checklist</th>
            </tr>
          </thead>
          <tbody>
            {dummyPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.id}</td>
                <td>{patient.doctor}</td>
                <td>{patient.reason}</td>
                <td className={`status ${patient.status}`}>{patient.status}</td>
                <td className="radio-options">
                  <label>
                    <input type="radio" name={`status-${index}`} value="pending" checked disabled />
                    Pending
                  </label>
                  <label>
                    <input type="radio" name={`status-${index}`} value="rejected" disabled />
                    Rejected
                  </label>
                  <label>
                    <input type="radio" name={`status-${index}`} value="resolved" disabled />
                    Resolved
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitingList;
