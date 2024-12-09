import React, { useState } from 'react';
import './OrderBookExchangePage.css';

function OrderBookExchangePage() {
  const [formData, setFormData] = useState({
    dataField1: '',
    dataField2: '',
    dataField3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://OBOOKapp-backend.cloud-stacks.com/api/orderbooks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Order Book created successfully');
      } else {
        alert(data.error || 'Error creating Order Book');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <div className="order-book-exchange-page">
      <header className="header">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <form className="exchange-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="dataField1">Data Field 1:</label>
            <input type="text" id="dataField1" name="dataField1" value={formData.dataField1} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="dataField2">Data Field 2:</label>
            <input type="text" id="dataField2" name="dataField2" value={formData.dataField2} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="dataField3">Data Field 3:</label>
            <input type="text" id="dataField3" name="dataField3" value={formData.dataField3} onChange={handleChange} />
          </div>
          <button type="submit" className="exchange-button">Initiate Data Exchange</button>
        </form>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <p>&copy; 2023 Company Name</p>
      </footer>
    </div>
  );
}

export default OrderBookExchangePage;