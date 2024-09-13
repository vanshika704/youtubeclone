import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

 export function VideoDetail() {
  const location = useLocation();
  const { video } = location.state || {};  // Get the passed video data

  if (!video) {
    return <div className="text-white">No video selected</div>;
  }

  return (
    <div className="flex  h-screen bg-youtubeGray">
        <Navbar/>
      <div className="max-w-3xl ml-20 mt-20">
        <video className="w-full h-auto" controls>
          <source src={video.videos.tiny.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-4 text-white">
          <h2 className="text-2xl font-semibold">{video.tags || "No tags available"}</h2>
        </div>
      </div>
    </div>
  );
}

// export default VideoDetail;  // Ensure this line exists
