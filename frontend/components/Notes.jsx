import React from 'react';
import { useEffect, useState } from 'react'

import '../public/styles.css'

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
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Notes;
