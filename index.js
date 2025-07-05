// index.js
const express = require('express');
const app = express();
const PORT = 5000;

// Sample GET route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
