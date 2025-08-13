import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
// If not already present:
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const USERS_FILE = "./users.json";

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

app.use(cors());
app.use(express.json());

//Route to home server
app.get('/', (req, res) => {
  res.send('Backend is running');
});

//Register the user
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


//Get the notes
app.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./notes.json', 'utf8'));
  res.json(notes);
});




app.listen(PORT, () => {
  console.log(`Backend service is starting on port ${PORT}...`);
});
