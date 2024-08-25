import { IoMenu, IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-black text-white py-3 flex items-center px-4">
      {/* Menu Icon */}
      <div className="flex items-center mr-4 ml-3">
        <IoMenu size="24px" color="white" />
      </div>

      {/* Responsive Image */}
      <img
        src="src/assets/youtubeback-removebg-preview.png"
        alt="YouTube Logo"
        className="h-16 w-auto mx-4 ml-2 object-contain" 
      />

      {/* Search Bar */}
      <div className="flex items-center flex-grow ml-auto max-w-2xl">
        <div className="flex items-center w-full bg-black border border-youtubeGray h-10 rounded-l-full overflow-hidden">
          
          {/* Search Icon */}
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="block w-full bg-black text-white border-0 pl-4 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-l-full sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="flex items-center justify-center w-16 h-10 bg-youtubeGray rounded-r-full hover:bg-gray-600 mr-4 sm:mr-8 md:mr-16 lg:mr-56"

        >
          <IoSearch className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4 ml-4">
        <button
          type="button"
          className="p-2.5 text-gray-400 hover:text-gray-500"
        >
          <svg
            className="h-6 w-6 text-white stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>

        <button
  type="button"
  className="p-2.5 bg-transparent text-gray-400 rounded-full hover:bg-gray-700"
>
  <svg
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M15 10L21 6V18L15 14V17C15 18.1046 14.1046 19 13 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H13C14.1046 5 15 5.89543 15 7V10ZM19 8.23608L15.7071 10.5H15V7.5H15.7071L19 5.76392V8.23608ZM5 7V17H13V7H5Z" />
  </svg>
</button>

      </div>
    </div>
  );
}

export default Navbar;
