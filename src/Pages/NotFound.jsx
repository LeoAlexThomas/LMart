import React from "react";
import { MdNotInterested } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 my-4 h-screen flex flex-col gap-2 justify-center items-center">
      <MdNotInterested className="text-[#FBFBFB] w-10 h-10" />
      <p className="text-base font-medium text-[#FBFBFB]">Page Not Found</p>
    </div>
  );
};

export default NotFound;
