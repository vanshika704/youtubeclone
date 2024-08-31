
import axios from "axios";

const API_URL = "https://pixabay.com/api/videos/";
const API_KEY = "45732391-f756039ab92580501d5bae5f9"; // Replace with your actual Pixabay API key

// Function to search for videos using Pixabay API
export const searchVideos = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        per_page: 10,
      },
    });
    return response.data.hits; // Return the list of videos
  } catch (error) {
    console.error("Error fetching videos from Pixabay API", error);
    return [];
  }
};
