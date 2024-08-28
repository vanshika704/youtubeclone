import ("../index.css");
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import Videos from "./videos";

function SideBar() {
    return (<div className="flex" >
        <div className="flex bg-black text-gray-900">
              <aside className="flex h-screen w-20 flex-col items-center border-r border-black bg-black mt-0">
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center ">
                    <GoHome size="20px" color="white"/>
                    <span className="text-white mt-1 text-xs">Home</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <SiYoutubeshorts size="20px" color="white"/>
                    <span className="text-white mt-1 text-xs">Shorts</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <MdSubscriptions size="20px" color="white" />
                    <span className="text-white mt-1 text-xs">Subscriptions</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <SiYoutubemusic size="20px" color="white" />
                    <span className="text-white mt-1 text-xs">Music</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <BiSolidVideos size="20px" color="white" />
                    <span className="text-white mt-1 text-xs">You</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <HiDownload size="20px" color="white" />
                    <span className="text-white mt-1 text-xs">Downloads</span>
                </div>
            </aside>
        </div>
        <Videos/>
        </div>
    );
}

export default SideBar;
