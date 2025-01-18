import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Homepage'; // Import HomePage component
import './App.css'; // Add global styles if needed

// Authenticated Route Wrapper
const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('adminToken'); // Check for token in localStorage
  return token ? element : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <Router>
      <Header /> {/* Header Component */}
      <main style={{ padding: '10px 0', minHeight: '50vh' }}> {/* Add padding to main */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/create" element={<UserForm />} />

          {/* Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute element={<AdminDashboard />} />}
          />
        </Routes>
      </main>
      <Footer /> {/* Footer Component */}
    </Router>
  );
}

export default App;
