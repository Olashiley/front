import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserForm.css'; // Import the CSS file for styling

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [duration, setDuration] = useState('');
  const [payment, setPayment] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data for the API request
    const userData = { name, email, phone, duration, payment };

    setLoading(true); // Start loading state
    setMessage('');  // Clear previous messages

    try {
      // Send the data to the backend API
      const response = await axios.post('http://localhost:5000/api/users/create', userData);
      const { message, token} = response;
      setMessage(response.data.message);  // Display success message

      localStorage.setItem("adminToken", JSON.stringify(token));
      // localstorage key adminToken setItem() localStorage.setItem("adminToken", JSON.stringify(token))
      navigate({to: "/admin/dashboard"})
    } catch (error) {
      // Display error message if the request fails
      setMessage('Error: ' + (error.response?.data?.message || error.message));  
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <h2>Create Account</h2>
        
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Duration of Training Field */}
        <div className="form-group">
          <label htmlFor="duration">Duration of Training</label>
          <input
            id="duration"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter the duration"
            required
          />
        </div>

        {/* Payment Field */}
        <div className="form-group">
          <label htmlFor="payment">Payment</label>
          <input
            id="payment"
            type="text"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            placeholder="Enter payment amount"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      {/* Display Success or Error Message */}
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default UserForm;
