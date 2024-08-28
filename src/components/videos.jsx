function Videos (){
    return (
        <>
      <div className="grid bg-black grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 w-full ">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="relative group">
            <a href="#" className="block rounded-lg overflow-hidden ">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="w-full h-32 sm:h-48 object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-4.586-2.291A1 1 0 009 9.707v4.586a1 1 0 001.166.97l4.586-2.291a1 1 0 000-1.774z"
                  />
                </svg>
              </div>

              <div className="mt-2 px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-900">Video Title {index + 1}</h3>
                <p className="text-xs text-gray-500">Description or additional details</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>)
}
export default Videos;