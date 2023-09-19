import React from "react";
import { FiHome, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-20">
      <div className="flex max-w-full flex-wrap items-center justify-between p-4 px-4">
        <div className="flex items-center cursor-pointer">
          <button className="w-10 h-10 bg-white text-black hover:bg-gray-200 rounded-full flex justify-center items-center">
            <FiHome />
          </button>
          <span>bimasetyo.com</span>
        </div>
        <button className="w-10 h-10 bg-white text-black hover:bg-gray-200 rounded-full flex justify-center items-center">
          <FiUser />
        </button>
      </div>
    </nav>
  );
}
