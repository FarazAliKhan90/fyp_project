import React, { useState } from 'react';
import axios from 'axios';
import "./ForgotPassword.css"; // Importing External CSS

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/forgot-password', { email });
      setMessage(response.data.message || 'Failed to send reset link.');
    } catch (error) {
      setMessage(error.response?.status === 404 ? 'User not found.' : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
