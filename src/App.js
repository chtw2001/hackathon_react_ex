import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleGetRequest = async () => {
    try {
      const response = await axios.get(`https://teamnback.sku-sku.com/api/get/${id}`);
      console.log('GET response:', response.data);
    } catch (error) {
      console.error('There was an error with the GET request!', error);
    }
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://teamnback.sku-sku.com/api/add', { "name": name });
      console.log('POST response:', response.data);
    } catch (error) {
      console.error('There was an error with the POST request!', error);
    }
  };

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>React API Example</h1>
        <div>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
          <button onClick={handleGetRequest}>Request</button>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <button onClick={handlePostRequest}>Send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
