import { IoMenu } from "react-icons/io5";

function Navbar() {
    return (
        <div className="bg-black text-white py-3 flex items-center px-4">
   
            <div className="flex flex-col items-center ml-2 ">
                    <IoMenu size="20px" color="white"/>
                    <span className="text-white mt-1 text-xs">Home</span>
                </div>
            <img
                src="src/assets/youtubelogo.png"
                alt="YouTube Logo"
                className="h-8 mx-4" // Adjust the margin as needed
            />
            
            {/* Remaining Items on the Right */}
            <ul className="flex gap-10 text-sm">
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;
