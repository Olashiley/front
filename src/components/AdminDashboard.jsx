import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [dashboardMessage, setDashboardMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          throw new Error("Token not found. Please log in again.");
        }
  
        const response = await axios.get('http://localhost:5000/api/admin/dashboard', {
          headers: { Authorization: `Bearer ${token}` }, // Include the token in the header
        });
  
        setDashboardMessage(response.data.message);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching dashboard data.');
      }
    };
  
    fetchDashboardData();
  }, []);
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {dashboardMessage && <p>{dashboardMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AdminDashboard;
