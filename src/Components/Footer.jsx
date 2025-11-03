import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 px-4 py-2 bg-[#F2F4F7] mt-4">
      <FaRegCopyright className="text-[#FF4F18]" />
      <p className="text-base font-medium text-center text-[#FF4F18]">
        Copyright 2025, Leo Alex Thomas
      </p>
    </div>
  );
};

export default Footer;
