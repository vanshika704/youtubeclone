function Videos() {
    return (
      <div className="bg-black p-4">
        {/* Single Grid Container with Dynamic Rows and Columns */}
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
                  <h3 className="text-sm font-semibold text-gray-900">Video Title {index + 1}</h3>
                  <p className="text-xs text-gray-500">Description or additional details</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Videos;
  