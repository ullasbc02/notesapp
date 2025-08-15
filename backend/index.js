import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const USERS_FILE = "./users.json";

// Middleware
app.use(cors());
app.use(express.json());


// Utility functions
// Read users
const readUsers = () => {
  return fs.existsSync(USERS_FILE)
    ? JSON.parse(fs.readFileSync(USERS_FILE))
    : [];
};

// Write users
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};


// Route
// Route to home server
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Register the user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  // Check if user already exists
  if (users.find(u => u.username === username)) { // Similar to for loop -> one liner
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Add user and save
  users.push({ username, password: hashedPassword });
  writeUsers(users);

  res.json({ message: 'Registered successfully' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  // Find user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check password
  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  res.json({ message: 'Login successful' });
});


//Get the notes
app.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./notes.json', 'utf8'));
  res.json(notes);
});



// Start server
app.listen(PORT, () => {
  console.log(`Backend service is starting on port ${PORT}...`);
});
