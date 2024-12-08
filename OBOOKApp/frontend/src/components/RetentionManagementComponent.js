import React from 'react';
import './RetentionManagementComponent.css';

function RetentionManagementComponent() {
  return (
    <div className="retention-management">
      <header className="header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h1 className="title">Manage Retention Period for Order Files</h1>
      </header>
      <nav className="navigation-tabs">
        <ul>
          <li className="tab">Dashboard</li>
          <li className="tab">Retention Management</li>
          <li className="tab">Settings</li>
        </ul>
      </nav>
      <main className="main-content">
        <form className="retention-form">
          <label className="form-label">Retention Period (days):</label>
          <input type="number" className="input-field" />
          <button type="submit" className="primary-button">Set Retention</button>
        </form>
        <div className="additional-links">
          <a href="#" className="link">Learn more about retention policies</a>
        </div>
      </main>
      <footer className="footer">
        <p>© 2023 OBOOKApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RetentionManagementComponent;
