import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import notes from './notes.json' assert { type: 'json' };

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`Backend service is starting on port ${PORT}...`);
});