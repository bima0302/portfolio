import React from "react";

function Projects() {
  return (
    <div id="Projects" className="my-10">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mx-4">My Projects</h1>{" "}
      <div className="flex flex-col md:flex-row items-center justify-center m-4">
        {/* TODO: Add Tumbnail */}
        <div className="container bg-cover bg-center bg-[url('https://raw.githubusercontent.com/bzizmza/dino-plus-movie/main/screenshot.png')] h-80 max-w-xl rounded-3xl transition duration-300 ease-in-out transform hover:scale-105"></div>
        {/* TODO: Add Project Details */}
        <div className="container h-80 max-w-xl rounded-3xl p-8">
          {/* TODO: Add title */}
          <div class="font-bold text-2xl">Dino Plus Movie</div>
          {/* TODO: Add description */}
          <p class="font-base text-base">
            Dino Plus Movie is a web application built using React, Tailwind
            CSS, and Vite. The project aims to provide a user-friendly and
            visually appealing interface for movie enthusiasts.
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Tech Stack:
            <span class="text-blue-500 dark:text-blue-400 ml-2">React</span>,
            <span class="text-green-500 dark:text-green-400">Tailwind CSS</span>
            ,<span class="text-indigo-500 dark:text-indigo-400">Vite</span>
          </p>
          <div class="mt-4">
            <a
              href="https://dino-plus-movie.vercel.app"
              target="_blank"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-3xl shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/bzizmza/dino-plus-movie"
              target="_blank"
              class="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-3xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center m-4">
        {/* TODO: Add Project Details */}
        <div className="container h-80 max-w-xl rounded-3xl p-8">
          {/* TODO: Add title */}
          <div class="font-bold text-2xl">Lorem ipsum dolor.</div>
          {/* TODO: Add description */}
          <p class="font-base text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, scelerisque
            aenean facilisi taciti inceptos diam, venenatis cum quam aptent
            iaculis nunc.
          </p>

          <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Tech Stack:
            <span class="text-blue-500 dark:text-blue-400 ml-2">Lorem</span>,
            <span class="text-green-500 dark:text-green-400">ipsum</span>,
            <span class="text-indigo-500 dark:text-indigo-400">dolor</span>
          </p>
          <div class="mt-4">
            <a
              href="#"
              target="_blank"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-3xl shadow-md mr-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Demo
            </a>
            <a
              href="#"
              target="_blank"
              class="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-3xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* TODO: Add Tumbnail */}
        <div className="container bg-red-100 h-80 max-w-xl rounded-3xl transition duration-300 ease-in-out transform hover:scale-105"></div>
      </div>
      {/* See more button */}
      <div className="text-center">
        <a href="http://github.com/bzizmza" target="_blank">
          <button className="mt-4 mx-auto px-4 py-2 w-72 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            See more
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
