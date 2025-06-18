import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(false); // New state for token validation

  useEffect(() => {
    // Token validation on page load
    const validateToken = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/auth/reset-password/${token}`);
        if (response.status === 200) {
          setIsTokenValid(true); // Set token as valid
        }
      } catch (err) {
        setError('Invalid or expired token');
        setIsTokenValid(false);
      }
    };

    validateToken();
  }, [token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/api/auth/reset-password/${token}`, { password });
      setMessage(response.data.message);
      setError('');

      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('Invalid or expired token.');
      } else {
        setError('An error occurred. Please try again.');
      }
      setMessage('');
    }
  };

  return (
    <div>
      {isTokenValid ? (
        <>
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      ) : (
        <p style={{ color: 'red' }}>Invalid or expired token. Please request a new reset link.</p>
      )}
    </div>
  );
}

export default ResetPassword;
