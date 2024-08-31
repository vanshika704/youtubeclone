// function Videos() {
//     return (
//       <div className="bg-black p-4">
       
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {Array.from({ length: 6 }).map((_, index) => ( // considered an array of length 6 and maped it at index
//             <div key={index} className="relative group">
//               <a href="#" className="block rounded-lg overflow-hidden">
//                 <video
//                   className="w-full h-48 sm:h-64 object-cover"
//                   controls //  controls is a function inbuilt 
//                 >
//                   <source
//                     src={`https://www.w3schools.com/html/mov_bbb.mp4`} // src of the videos 
//                     type="video/mp4"
//                   />
//                   Your browser does not support the video tag.
//                 </video>
//                 <div className="mt-2 px-4 py-2">
//                   <h3 className="text-sm font-semibold text-gray-200">Bunny  {index + 1}</h3>
//                   <p className="text-xs text-gray-500">Bunny Catches the butterfly</p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default Videos;
  
  // src/Videos.js
// src/Videos.js
import { useEffect, useState } from "react";
import { searchVideos } from "../services/fetchvideos";


function Videos() {
  const [videos, setVideos] = useState([]); // State to store video data
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Function to fetch videos from Pixabay API
  const fetchPixabayVideos = async () => {
    try {
      const videoResults = await searchVideos("nature"); // Search query "nature" or any other keyword
      setVideos(videoResults);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    } finally {
      setLoading(false); // Stop loading state after fetching videos
    }
  };

  useEffect(() => {
    fetchPixabayVideos(); // Fetch videos when the component mounts
  }, []);

  return (
    <div className="bg-black p-4">
      {loading ? ( // Display loading message while fetching videos
        <p className="text-white">Loading videos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.length > 0 ? (
            videos.map((video, ) => (
              <div key={video.id} className="relative group">
                <a href={video.videos.tiny.url} className="block rounded-lg overflow-hidden" target="_blank" rel="noopener noreferrer">
                  <video className="w-full h-48 sm:h-64 object-cover" controls>
                    <source src={video.videos.tiny.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="mt-2 px-4 py-2">
                    <h3 className="text-sm font-semibold text-gray-200"> {video.description}</h3>
                    <p className="text-xs text-gray-500">{video.tags}</p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p className="text-white">No videos found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Videos;
