// proxy-server.js
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 4000;

const API_KEY = '0QmEmPXm8p4oTFNIVTaw1UJ6Fw1YRNhltsgBW3qpZKHV0mwMgEspJzFA';

// Route to handle video fetching
app.get('/videos/popular', async (req, res) => {
  try {
    // Fetch videos from Pexels API
    const response = await fetch('https://api.pexels.com/videos/popular', {
      headers: {
        Authorization: `Bearer ${API_KEY}`, // API key is included here
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch videos from Pexels API');
    }

    const data = await response.json();
    res.json(data); // Send the data back to the client
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
