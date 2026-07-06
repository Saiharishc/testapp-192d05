import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    // Fetch root message
    fetch('/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching root message:', error));

    // Fetch test data
    fetch('/test-data')
      .then(response => response.json())
      .then(data => setTestData(data))
      .catch(error => console.error('Error fetching test data:', error));
  }, []);

  const handleCreateTestData = () => {
    fetch('/test-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // Add any necessary data here
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        // Optionally re-fetch data after creation
        fetch('/test-data')
          .then(res => res.json())
          .then(newData => setTestData(newData))
          .catch(err => console.error('Error refetching test data:', err));
      })
      .catch(error => console.error('Error creating test data:', error));
  };

  return (
    <div className="App">
      <h1>TestApp</h1>
      <p>{message}</p>
      <h2>Test Data:</h2>
      {testData ? (
        <pre>{JSON.stringify(testData, null, 2)}</pre>
      ) : (
        <p>Loading test data...</p>
      )}
      <button onClick={handleCreateTestData}>Create Test Data</button>
    </div>
  );
}

export default App;
