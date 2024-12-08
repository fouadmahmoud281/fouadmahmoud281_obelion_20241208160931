import React, { useState } from 'react';
import './FileValidationPage.css';

function FileValidationPage() {
  const [senderCode, setSenderCode] = useState('');
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const validateFile = () => {
    setError('');
    if (!senderCode || !fileName) {
      setError('Sender code and file name cannot be empty.');
      return;
    }
    if (!fileName.match(/^[a-zA-Z0-9_-]+$/)) {
      setError('File name does not meet naming conventions.');
      return;
    }
    if (senderCode !== 'EXPECTED_SENDER_CODE') {
      setError('Sender code does not match.');
      return;
    }
  };

  return (
    <div className="file-validation-page">
      <header className="header">
        <img src="your-logo-link-here" alt="Company Logo" className="logo" />
        <h1 className="title">Validate Order Data Files</h1>
      </header>
      <nav className="navigation">
        <ul>
          <li className="active">Validation</li>
          <li>History</li>
          <li>Help</li>
        </ul>
      </nav>
      <main className="validation-form">
        <label htmlFor="senderCode">Sender Code</label>
        <input
          type="text"
          id="senderCode"
          value={senderCode}
          onChange={(e) => setSenderCode(e.target.value)}
        />
        <label htmlFor="fileName">File Name</label>
        <input
          type="text"
          id="fileName"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button onClick={validateFile}>Validate</button>
        {error && <div className="error-message">{error}</div>}
      </main>
      <aside className="additional-links">
        <a href="#guidance">Guidance</a>
        <a href="#info">Further Information</a>
      </aside>
      <footer className="footer">
        <p>© Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FileValidationPage;
