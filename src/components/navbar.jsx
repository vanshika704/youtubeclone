import { IoMenu, IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <div className="bg-black text-white py-3 flex items-center px-4">
     
      <div className="flex items-center mr-4 ml-3">
        <IoMenu size="24px" color="white" />
      </div>

      
      <img
        src="src/assets/youtubeback-removebg-preview.png"
        alt="YouTube Logo"
        className="h-12 w-auto mx-4 ml-2 object-contain" 
      />


      <div className="flex items-center flex-grow ml-auto h-8 w-full max-w-lg">
        <div className="flex items-center w-full bg-black border border-gray-300 h-8 rounded-full overflow-hidden">
      
          <div className="relative flex items-center w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearch className="w-4 h-4 text-white" />
            </div>

      
            <input
              type="text"
              className="block w-full bg-black text-white border-0 py-1.5 pl-10 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-full sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        <button
          type="button"
          className="p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <svg
            className="h-5 w-5 text-white stroke-2"
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
          className="p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <svg
            className="w-5 h-5 text-white stroke-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
