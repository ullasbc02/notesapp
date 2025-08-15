import React from 'react';
import { useEffect, useState } from 'react'
import Title from './Title'
import '../public/styles.css'
import Note from './Note';
import axios from 'axios';

function Notes() {
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

export default Notes;
