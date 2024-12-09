const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const orderBookRoutes = require('./routes/orderBookRoutes');
const fileValidationRoutes = require('./routes/fileValidationRoutes');
const retentionRoutes = require('./routes/retentionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'db',
  user: 'agent',
  password: 'agentpass',
  database: 'Obelien AI'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use('/api', orderBookRoutes);
app.use('/api', fileValidationRoutes);
app.use('/api', retentionRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
