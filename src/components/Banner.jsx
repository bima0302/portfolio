import React from "react";

function Banner() {
  return (
    // TODO: Add banner
    // TODO: Add background
    <div className="bg-blue-100 h-72 mt-20 p-10 m-4 rounded-3xl flex items-center">
      {/* TODO: Add contents */}
      <div class="container mx-auto flex items-center justify-between">
        {/* TODO: Add title */}
        <div class="text-2xl">Hello, I&apos;m Bima!</div>
        {/* TODO: Add button (Contact Me) */}
        <a
          href="https://www.linkedin.com/in/abimanyusrisetyo/"
          class="inline-block"
          target="_blank"
        >
          <button class="bg-white text-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 hover:text-white">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}

export default Banner;
