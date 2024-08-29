import { useQuery } from '@tanstack/react-query';

const API_KEY = '0QmEmPXm8p4oTFNIVTaw1UJ6Fw1YRNhltsgBW3qpZKHV0mwMgEspJzFA'; 

const fetchVideos = async () => {
  const response = await fetch('https://api.pexels.com/videos/popular', {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};

// Custom hook for fetching videos
export const usePexelsVideos = () => {
  return useQuery({
    queryKey: ['pexelsVideos'], // Use 'queryKey' instead of the first argument
    queryFn: fetchVideos,       // Use 'queryFn' instead of the second argument
  });
};
