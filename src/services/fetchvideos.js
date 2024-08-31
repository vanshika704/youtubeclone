
import axios from "axios";

const API_URL = "https://pixabay.com/api/videos/";
const API_KEY = "45732391-f756039ab92580501d5bae5f9"; 

export const searchVideos = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        per_page: 30,
      },
    });
    return response.data.hits; 
  } catch (error) {
    console.error("Error fetching videos from Pixabay API", error);
    return [];
  }
};
