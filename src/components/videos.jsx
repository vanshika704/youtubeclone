function Videos() {
    return (
      <div className="bg-black p-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => ( // considered an array of length 6 and maped it at index
            <div key={index} className="relative group">
              <a href="#" className="block rounded-lg overflow-hidden">
                <video
                  className="w-full h-48 sm:h-64 object-cover"
                  controls //  controls is a function inbuilt 
                >
                  <source
                    src={`https://www.w3schools.com/html/mov_bbb.mp4`} // src of the videos 
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
  
  