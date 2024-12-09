import React from 'react';
import './OrderBookExchangeComponent.css';

function OrderBookExchangeComponent() {
  return (
    <div className="order-book-exchange">
      <header className="header">
        <img src="logo.png" alt="Logo" className="logo" />
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Exchange</a>
          <a href="#" className="nav-link">Data</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>
      <main className="main-content">
        <h1 className="main-heading">Exchange Order Book Data</h1>
        <form className="exchange-form">
          <div className="form-group">
            <label htmlFor="field1" className="form-label">Field 1</label>
            <input type="text" id="field1" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="field2" className="form-label">Field 2</label>
            <input type="text" id="field2" className="form-input" />
          </div>
          <button type="submit" className="submit-button">Initiate Exchange</button>
        </form>
        <div className="additional-links">
          <a href="#" className="additional-link">More Info</a>
          <a href="#" className="additional-link">Resources</a>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default OrderBookExchangeComponent;
