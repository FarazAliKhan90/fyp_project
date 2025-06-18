import React, { useState, useEffect } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('enrolledStaff')) || [];
    setRegistered(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('enrolledStaff', JSON.stringify(registered));
  }, [registered]);

  const handleSubmit = () => {
    if (email.trim() && password.trim() && role.trim()) {
      const newEntry = {
        id: Date.now(),
        email,
        password,
        role,
      };
      setRegistered([...registered, newEntry]);
      setEmail('');
      setPassword('');
      setRole('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="enroll-container">
      <div className="enroll-box">
        <h2>Enroll New Staff / Doctor</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Select Role:</label>
          <select  value={role} required onChange={(e) => setRole(e.target.value)}>
            <option value="">-- Select Role --</option>
            <option value="Doctor">Doctor</option>
            <option value="PA">Personal Assistant</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Receptionist">Receptionist</option>
            
          </select>
        </div>

        <button onClick={handleSubmit}>Enroll Now</button>

        {showToast && <div className="toast">✅ Enrolled Successfully!</div>}
      </div>
    </div>
  );
};

export default TaskManager;
