import ("../index.css");
import { IoMenu } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
function SideBar() {
    return (
        <div className="flex bg-black text-gray-900">
            <aside className="flex h-screen w-20 flex-col items-center border-r border-black bg-black">
                <div className="flex h-[4.5rem] w-full items-center justify-center ">
                <IoMenu size="24px" color="white" />
                </div>
                <div className="flex h-[4.5rem] w-full items-center justify-center">
                <GoHome size="24px" color="white"/>
                </div>
                <div className="flex h-[4.5rem] w-full items-center justify-center ">
                <SiYoutubeshorts size="24px" color="white"/>
                </div>
                <div className="flex h-[4.5rem] w-full items-center justify-center ">
                <MdSubscriptions  size="24px" color="white" />
                </div>
                <div className="flex h-[4.5rem] w-full items-center justify-center  ">
                <SiYoutubemusic  size="24px" color="white" />
                </div>
                <div className="flex h-[4.5rem] w-full items-center justify-center  ">
                <BiSolidVideos  size="24px" color="white" />
                </div>
                <div className="flex h-[4.5rem] w-full items-center justify-center  ">
                <HiDownload size="24px" color="white" />
                </div>

            </aside>
        </div>
    );
}

export default SideBar;
