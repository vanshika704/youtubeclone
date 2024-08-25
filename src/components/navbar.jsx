import { IoMenu, IoSearch } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
function Navbar() {
  return (
    <div className="bg-black text-white py-3 flex items-center px-4">
    
      <div className="flex items-center mr-4 ml-3">
        <IoMenu size="24px" color="white" />
      </div>

 
      <img
        src="src/assets/new-youtube-premium-features-1280-6d58ec9cf9__1_-removebg-preview.png"
        alt="YouTube Logo"
        className="h-16 w-auto mx-4 ml-2 object-contain" 
      />

   
      <div className="flex items-center flex-grow ml-auto max-w-2xl">
        <div className="flex items-center w-full bg-black border border-youtubeGray h-10 rounded-l-full overflow-hidden">
          
         
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="block w-full bg-black text-white border-0 pl-4 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-l-full sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

      
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
  className="p-2.5 bg-transparent text-gray-400 rounded-full"
> <svg
            className="h-8 w-8 mt-3 text-white stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
<RiVideoAddLine /></svg>
</button>

<button
  type="button"
  className="p-2.5 bg-transparent text-gray-400 rounded-full"
> <img
  alt="tania andrew"
  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
  className="relative inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center"
  data-popover-target="profile-menu"
/>
</button>
      </div>
    </div>
  );
}

export default Navbar;
