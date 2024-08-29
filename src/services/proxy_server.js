// proxy-server.js
import express from 'express'; // Import express using ES6 syntax
import fetch from 'node-fetch'; // Import node-fetch using ES6 syntax

const app = express();
const PORT = 4000;

const API_KEY = '0QmEmPXm8p4oTFNIVTaw1UJ6Fw1YRNhltsgBW3qpZKHV0mwMgEspJzFA';

app.get('/videos/popular', async (req, res) => {
  try {
    const response = await fetch('https://api.pexels.com/videos/popular', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch videos from Pexels API');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
