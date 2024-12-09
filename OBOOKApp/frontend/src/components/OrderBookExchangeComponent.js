import React, { useState } from 'react';
import './OrderBookExchangeComponent.css';

function OrderBookExchangeComponent() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'field1') setField1(value);
    if (id === 'field2') setField2(value);
    if (id === 'field3') setField3(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://OBOOKapp-backend.cloud-stacks.com/api/orderbooks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ field1, field2, field3 }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage('Order Book entry created successfully!');
        setField1('');
        setField2('');
        setField3('');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

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
        <form className="exchange-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="field1" className="form-label">Field 1</label>
            <input type="text" id="field1" className="form-input" value={field1} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="field2" className="form-label">Field 2</label>
            <input type="text" id="field2" className="form-input" value={field2} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="field3" className="form-label">Field 3</label>
            <input type="text" id="field3" className="form-input" value={field3} onChange={handleInputChange}/>
          </div>
          <button type="submit" className="submit-button">Initiate Exchange</button>
        </form>
        {message && <p className="message">{message}</p>}
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