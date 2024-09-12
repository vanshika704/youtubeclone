import { useLocation } from "react-router-dom";

 export function VideoDetail() {
  const location = useLocation();
  const { video } = location.state || {};  // Get the passed video data

  if (!video) {
    return <div className="text-white">No video selected</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-3xl">
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
