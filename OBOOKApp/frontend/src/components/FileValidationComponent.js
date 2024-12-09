import React, { useState } from 'react';
import './FileValidationComponent.css';

function FileValidationComponent() {
  const [senderCode, setSenderCode] = useState('');
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidation = () => {
    if (!senderCode || !fileName) {
      setErrorMessage('Sender code and file name cannot be empty.');
      return;
    }
    if (!fileName.match(/^[\w-]+\.txt$/)) {
      setErrorMessage('File naming convention is not respected. Expected format: name.txt');
      return;
    }
    if (senderCode !== 'EXPECTED_SENDER_CODE') {
      setErrorMessage('Sender code does not match.');
      return;
    }
    setErrorMessage('');
    // Additional validation logic here
  };

  return (
    <div className="file-validation-container">
      <header className="header">
        <img src="company-logo-link" alt="Company Logo" className="logo" />
        <h1 className="title">Validate Order Data Files</h1>
      </header>
      <nav className="navigation">
        <ul>
          <li className="active-tab">Validation</li>
          <li>History</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="main-content">
        <form className="validation-form">
          <label className="form-label">
            Sender Code
            <input
              type="text"
              value={senderCode}
              onChange={(e) => setSenderCode(e.target.value)}
              className="input-field"
            />
          </label>
          <label className="form-label">
            File Name
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="input-field"
            />
          </label>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="button" onClick={handleValidation} className="validate-button">
            Validate
          </button>
        </form>
        <aside className="additional-links">
          <a href="#guidance">Guidance</a>
          <a href="#more-info">More Info</a>
        </aside>
      </main>
      <footer className="footer">
        <p>Company Information</p>
        <a href="#related-links">Related Links</a>
      </footer>
    </div>
  );
}

export default FileValidationComponent;
