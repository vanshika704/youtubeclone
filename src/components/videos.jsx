function Videos() {
    return (
      <div className="bg-black p-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative group">
              <a href="#" className="block rounded-lg overflow-hidden">
                <video
                  className="w-full h-48 sm:h-64 object-cover"
                  controls
                >
                  <source
                    src={`https://www.w3schools.com/html/mov_bbb.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-2 px-4 py-2">
                  <h3 className="text-sm font-semibold text-gray-200">Bunny  {index + 1}</h3>
                  <p className="text-xs text-gray-500">Bunny Catches the butterfly</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Videos;
  
  // const fetchVideos = async () => {
  //   const response = await fetch('http://localhost:4000/videos/popular'); // Proxy server URL
  
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  
  //   const data = await response.json();
  //   return data;
  // };
// Adjust the import path if necessary

// import { usePexelsVideos } from "../services/tanstack";

// function Videos() {
//   const { data, isLoading, isError, error } = usePexelsVideos(); // Fetch videos using custom hook

//   if (isLoading) {
//     return <div className="text-black">Loading videos...</div>;
//   }

//   if (isError) {
//     return <div className="text-red-500">Error: {error.message}</div>;
//   }

//   return (
//     <div className="bg-black p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {data?.videos?.map((video) => (
//           <div key={video.id} className="relative group">
//             <a href="#" className="block rounded-lg overflow-hidden">
//               <video
//                 className="w-full h-48 sm:h-64 object-cover"
//                 controls
//               >
//                 <source
//                   src={video.video_files[0].link} // Use the actual video link fetched from the API
//                   type={video.video_files[0].file_type} // Use the actual video file type fetched from the API
//                 />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="mt-2 px-4 py-2">
//                 <h3 className="text-sm font-semibold text-gray-200">
//                   {video.user.name} {/* Display the video creator's name */}
//                 </h3>
//                 <p className="text-xs text-gray-500">
//                   {video.description || 'No description available'} {/* Video description or fallback text */}
//                 </p>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Videos;
