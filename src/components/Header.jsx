import React from 'react';
import './Header.css'; // External CSS file
import headerLogo from '../assets/header-logo.jpeg'; // Path to the header logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img src={headerLogo} alt="Header Logo" className="header-logo" />
      </div>
      <nav className="header-nav">
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/user/create">Create Account</a></li>
          <li><a href="/admin/login">Admin Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
