import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-blue-50 h-40 flex flex-col items-center justify-center text-center">
      {/* Add contents */}
      <div className="container">
        {/* Add "Build With Love by Bima" text */}
        <p className="mt-4 text-gray-600 text-sm">
          Build With &hearts; by Bima Setyo
        </p>
        {/* Add buttons with react-icons (LinkedIn) */}
        <a
          href="https://www.linkedin.com/in/abimanyusrisetyo/"
          className="inline-block"
          target="_blank"
        >
          <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white h-10 w-10 rounded-full  m-2 transition duration-300 flex items-center justify-center">
            <FaLinkedin />
          </button>
        </a>
        {/* Add buttons with react-icons (GitHub) */}
        <a
          href="http://github.com/bzizmza"
          className="inline-block"
          target="_blank"
        >
          <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white h-10 w-10 rounded-full  m-2 transition duration-300 flex items-center justify-center">
            <FaGithub />
          </button>
        </a>
        {/* Add buttons with react-icons (Twitter) */}
        <a
          href="https://twitter.com/bzizmza"
          className="inline-block"
          target="_blank"
        >
          <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white h-10 w-10 rounded-full  m-2 transition duration-300 flex items-center justify-center">
            <FaTwitter />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
