// src/YouTubeSearch.js
import { useState , useEffect } from 'react';
import Navbar from './Navbar';
import Videos from './Videos';
import { fetchVideos } from '../services/fetchvideos';

const YouTubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (query.trim() === '') return; // Avoid searching if the query is empty
    const fetchedVideos = await fetchVideos(query);
    setVideos(fetchedVideos);
  };
  const fetchRandomVideos = async () => {
    const randomQuery = 'random videos'; // or any default keyword for random videos
    const fetchedVideos = await fetchVideos(randomQuery);
    setVideos(fetchedVideos || []);
  };
  useEffect(() => {
    fetchRandomVideos();
  }, []);


  return (
    <div className="bg-black min-h-screen">
    <Navbar query={query} setQuery={setQuery} handleSearch={handleSearch} />
    <Videos videos={videos} />
  </div>
  );
};

export default YouTubeSearch;
