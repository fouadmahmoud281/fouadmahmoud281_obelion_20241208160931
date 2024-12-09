import React from 'react';
import './RetentionManagementPage.css';

function RetentionManagementPage() {
    return (
        <div className="retention-management-page">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <h1 className="title">Manage Retention Period for Order Files</h1>
            </header>
            <nav className="navigation-tabs">
                <ul>
                    <li className="nav-tab">Dashboard</li>
                    <li className="nav-tab">Retention Management</li>
                    <li className="nav-tab">Settings</li>
                </ul>
            </nav>
            <main className="main-content">
                <form className="retention-form">
                    <label className="form-label">Retention Period (days):</label>
                    <input type="number" className="form-input" />
                    <button type="submit" className="primary-action-button">Set Retention Period</button>
                </form>
                <div className="additional-links">
                    <a href="#" className="additional-link">Learn more about Retention Policies</a>
                </div>
            </main>
            <footer className="footer">
                <p>© 2023 OBOOK</p>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
            </footer>
        </div>
    );
}

export default RetentionManagementPage;
