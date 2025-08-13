import { useEffect, useState } from 'react'
import Title from '../components/Title'
import './App.css'
import axios from 'axios';
import Note from '../components/Note';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/notes');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <h1>Notes-App</h1>
      <ul>
        {data.map((note, index) => (
          <li key={index}>
            <Title title={note.title} />
            <Note content={note.content} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
