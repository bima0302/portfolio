import React from "react";

function Header() {
  return (
    // TODO: Add Header
    // TODO: Add background
    <div className="bg-blue-100 md:h-96 h-80 m-4 rounded-3xl flex items-center justify-center text-center">
      {/* TODO: Add contents */}
      <div class="container ">
        {/* TODO: Add title */}
        <div class="font-bold md:text-6xl text-3xl">Hello, I&apos;m Bima!</div>
        {/* TODO: Add description */}
        <p class="font-base text-xl">Software engineer.</p>
        {/* TODO: Add button (Contact Me) */}
        <a
          href="https://www.linkedin.com/in/abimanyusrisetyo/"
          class="inline-block"
          target="_blank"
        >
          <button class="bg-white text-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 hover:text-white m-2 transition duration-300">
            Contact Me
          </button>
        </a>
        {/* TODO: Add button (Projects) */}
        <a href="#Projects" class="inline-block">
          <button class="bg-white text-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 hover:text-white m-2 transition duration-300">
            Projects
          </button>
        </a>
        {/* TODO: Add button (Blog) */}
        <a href="#Blog" class="inline-block">
          <button class="bg-white text-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 hover:text-white m-2 transition duration-300">
            Blog
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
