import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('')

  const fetchMessage = () => {
    fetch("http://localhost:3000/api/messages")
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
      })
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
