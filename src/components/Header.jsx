import React from "react";
import { FiHome, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-20">
      <div className="flex max-w-full flex-wrap items-center justify-between p-4 px-4">
        <div className="flex items-center cursor-pointer">
          {/* TODO: Add logo image */}
          <a
            href="https://bimasetyo.com"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-10 h-10 bg-white text-black hover:bg-gray-200 rounded-full flex justify-center items-center">
              <FiHome />
            </button>
          </a>
          <div className="ml-2 text-lg">bimasetyo.com</div>
        </div>
        {/* TODO: Add user icon */}
        {/* <button className="w-10 h-10 bg-white text-black hover:bg-gray-200 rounded-full flex justify-center items-center">
          <FiUser />
        </button> */}
      </div>
    </nav>
  );
}
