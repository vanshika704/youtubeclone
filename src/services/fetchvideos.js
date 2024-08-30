// src/youtubeService.js
import axios from 'axios';

const API_KEY = '0QmEmPXm8p4oTFNIVTaw1UJ6Fw1YRNhltsgBW3qpZKHV0mwMgEspJzFA';
const BASE_URL = 'https://api.pexels.com/videos/';

export const fetchVideos = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
