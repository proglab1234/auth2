const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user_auth'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected...');
});

// JWT secret
const JWT_SECRET = 'your_secret_key';

// Register endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, hashedPassword], (err) => {
    if (err) return res.status(500).send('Server error');
    res.status(201).send('User registered successfully');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) return res.status(401).send('Invalid credentials');

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true }).send('Login successful');
  });
});

// Profile endpoint
app.get('/profile', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Access denied');

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send('Invalid token');
    
    db.query('SELECT id, username, email FROM users WHERE id = ?', [decoded.id], (err, results) => {
      if (err || results.length === 0) return res.status(404).send('User not found');
      res.json(results[0]);
    });
  });
});

// Logout endpoint
app.post('/logout', (req, res) => {
  res.clearCookie('token').send('Logout successful');
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

