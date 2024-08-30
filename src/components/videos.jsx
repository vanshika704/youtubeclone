import PropTypes from 'prop-types';
import  { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { fetchVideos } from '../services/fetchvideos'; // Ensure this import is correct

const Videos = ({ videos = [] }) => {
  const [displayedVideos, setDisplayedVideos] = useState(videos);

  const fetchRandomVideos = async () => {
    const randomQuery = 'random videos'; // Keyword for fetching random videos
    const fetchedVideos = await fetchVideos(randomQuery);
    setDisplayedVideos(fetchedVideos || []);
  };

  useEffect(() => {
    if (videos.length === 0) {
      fetchRandomVideos();
    } else {
      setDisplayedVideos(videos);
    }
  }, [videos]);

  return (
    <div className="bg-black p-4">
      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedVideos.length > 0 ? (
          displayedVideos.map((video) => (
            <div key={video.id.videoId} className="relative group">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                className="block rounded-lg overflow-hidden"
              >
                <div className="w-full h-48 sm:h-64">
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
                <div className="mt-2 px-4 py-2">
                  <h3 className="text-sm font-semibold text-gray-200">
                    {video.snippet.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {video.snippet.description || 'No description available'}
                  </p>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-white">
            No videos to display. Please search for videos above.
          </p>
        )}
      </div>
    </div>
  );
};

// Add prop types validation
Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string.isRequired,
      }).isRequired,
      snippet: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
    })
  ),
};

export default Videos;
