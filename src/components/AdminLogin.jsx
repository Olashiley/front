import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css'; // Import CSS for styling

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { username, password };

    try {
      // Make the POST request to the API
      const response = await axios.post('http://localhost:5000/api/admin/login', loginData);

      // Display success message and store the token
      setMessage('Login successful!');
      setToken(response.data.token);  // Store the JWT token

      // You can store the token in localStorage/sessionStorage for persistence
      localStorage.setItem('adminToken', response.data.token);  // Store token in localStorage

    } catch (error) {
      // Display error message if the request fails
      setMessage('Error: ' + (error.response?.data?.message || error.message));  
    }
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <h2>Admin Login</h2>
        
        {/* Username Field */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Admin Username"
          required
        />
        <br /><br />
        
        {/* Password Field */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br /><br />
        
        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      {/* Display Success or Error Message */}
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default AdminLogin;
