import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 px-4 py-2 bg-[#1B1B1E] mt-4">
      <FaRegCopyright className="text-[#F56E0F]" />
      <p className="text-base font-medium text-center text-[#F56E0F]">
        Copyright 2025, Leo Alex Thomas
      </p>
    </div>
  );
};

export default Footer;
