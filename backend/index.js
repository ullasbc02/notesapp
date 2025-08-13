import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./notes.json', 'utf8'));
  res.json(notes);
});
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Backend service is starting on port ${PORT}...`);
});
