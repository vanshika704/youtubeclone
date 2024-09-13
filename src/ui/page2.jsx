import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { searchVideos } from "../services/fetchvideos"; // Ensure to import the searchVideos function

export function VideoDetail() {
  const location = useLocation();
  const { video } = location.state || {}; // Get the passed video data
  const [videos, setVideos] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch videos from Pixabay or another API
  const fetchPixabayVideos = async () => {
    try {
      const videoResults = await searchVideos("nature"); 
      console.log("Fetched Videos: ", videoResults); 
      setVideos(videoResults);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchPixabayVideos(); 
  }, []);

  if (!video) {
    return <div className="text-white">No video selected</div>;
  }

  return (
    <div className="flex h-screen bg-youtubeGray">
      <Navbar />
      <div className="flex w-full">
        {/* Main video section */}
        <div className="flex-1 max-w-3xl ml-20 mt-20">
          <video className="w-full h-auto" controls>
            <source src={video.videos.tiny.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-4 text-white">
            <h2 className="text-2xl font-semibold">
              {video.tags || "No tags available"}
            </h2>
          </div>
        </div>

        {/* Videos list on the right side */}
        <div className="w-1/4 ml-10 mt-20 overflow-y-auto">
          {loading ? (
            <p className="text-white">Loading videos...</p>
          ) : videos.length > 0 ? (
            videos.map((vid) => (
              <div key={vid.id} className="relative group mb-4">
                <Link
                  to={`/videos/${vid.id}`}
                  state={{ video: vid }} // Pass the video data to the new page
                  className="block rounded-lg overflow-hidden"
                >
                  <video className="w-full h-24 object-cover" controls>
                    <source src={vid.videos.tiny.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="mt-2 px-2">
                    <p className="text-md text-gray-200 font-semibold">
                      {vid.tags || "No tags available"}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-white">No videos found</p>
          )}
        </div>
      </div>
    </div>
  );
}

// export default VideoDetail;
