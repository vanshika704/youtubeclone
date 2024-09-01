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
// import { useEffect, useState } from "react";
// import { searchVideos } from "../services/fetchvideos";


// function Videos() {
//   const [videos, setVideos] = useState([]); 
//   const [loading, setLoading] = useState(true); 

//   const fetchPixabayVideos = async () => {
//     try {
//       const videoResults = await searchVideos("nature"); 
//       setVideos(videoResults);
//     } catch (error) {
//       console.error("Failed to fetch videos", error);
//     } finally {
//       setLoading(false); 
//     }
//   };

//   useEffect(() => {
//     fetchPixabayVideos(); 
//   }, []);

//   return (
//     <div className="bg-black p-4">
//       {loading ? ( 
//         <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
//         <div>
//           <h1 className="text-xl md:text-7xl font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" strokeWidth="0"
//               viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
//               </path>
//             </svg> ading . . .</h1>
//         </div>
//       </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {videos.length > 0 ? (
//             videos.map((video, ) => (
//               <div key={video.id} className="relative group">
//                 <a href={video.videos.tiny.url} className="block rounded-lg overflow-hidden" target="_blank" rel="noopener noreferrer">
//                   <video className="w-full h-48 sm:h-64 object-cover" controls>
//                     <source src={video.videos.tiny.url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                   <div className="mt-2 px-4 py-2">
//                     <h3 className="text-sm font-semibold text-gray-200"> {video.description}</h3>
//                     <p className="text-xs text-gray-500">{video.tags}</p>
//                   </div>
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p className="text-white">No videos found</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Videos;
// src/Videos.js
import { useEffect, useState } from "react";
import { searchVideos } from "../services/fetchvideos";

function Videos() {
  const [videos, setVideos] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchPixabayVideos = async () => {
    try {
      const videoResults = await searchVideos("nature"); 
      console.log("Fetched Videos: ", videoResults); // Log the video data to inspect the structure
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

  return (
    

<div>
<div className="flex space-x-4 bg-black p-4">
  {/* Like Button */}
  <button
    type="button"
    className="inline-flex items-center gap-x-2 rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
      />
    </svg>
    <span>Like</span>
  </button>

  {/* Save Button */}
  <button
    type="button"
    className="inline-flex items-center gap-x-2 rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
    <span>Save</span>
  </button>

  {/* Share Button */}
  <button
    type="button"
    className="inline-flex items-center gap-x-2 rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
        clipRule="evenodd"
      />
    </svg>
    <span>Share</span>
  </button>

  {/* Download Button */}
  <button
    type="button"
    className="inline-flex items-center gap-x-2 rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-gray-400 shadow-sm hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
      />
    </svg>
    <span>Download</span>
  </button>
</div>




























    <div className="bg-black p-4">
      
      {loading ? ( 
        <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
          <div>
            <h1 className="text-xl md:text-7xl font-bold flex items-center">
              L
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
              </svg> 
              ading . . .
            </h1>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className="relative group">
                <a href={video.videos.tiny.url} className="block rounded-lg overflow-hidden" target="_blank" rel="noopener noreferrer">
                  <video className="w-full h-48 sm:h-64 object-cover" controls>
                    <source src={video.videos.tiny.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="mt-2 px-4 py-2">
                  <p className="text-md text-gray-200 font-semibold">{video.tags || "No tags available"}</p>
                    {/* <h3 className="text-xs font-semibold text-gray-200">
                    {video.description || "No description available"}
                    </h3> */}
                   
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
</div>
  );
}

export default Videos;
