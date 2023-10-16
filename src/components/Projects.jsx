import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <div id="Projects" className="my-10">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mx-4">My Projects</h1>{" "}
      <div className="flex flex-col md:flex-row items-center justify-center m-4">
        {/* TODO: Add Tumbnail */}
        <div className="container bg-cover bg-center bg-[url('/project-1.webp')] h-80 max-w-xl rounded-3xl transition duration-300 ease-in-out transform hover:scale-105"></div>

        {/* TODO: Add Project Details */}
        <div className="container flex content-center flex-wrap h-80 max-w-xl rounded-3xl p-8">
          {/* TODO: Add title */}
          <div class="font-bold text-2xl">Dino Plus Movie</div>
          {/* TODO: Add description */}
          <div>
            <p class="font-base text-base">
              Dino Plus Movie is a web application built using React, Tailwind
              CSS, and Vite. The project aims to provide a user-friendly and
              visually appealing interface for movie enthusiasts.
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Tech Stack:
              <span class="text-blue-500 dark:text-blue-400 ml-2">React</span>,
              <span class="text-green-500 dark:text-green-400">Vite</span>,
              <span class="text-indigo-500 dark:text-indigo-400">
                Tailwind CSS
              </span>
            </p>
          </div>
          <div class="mt-4">
            <a
              href="https://dino-plus-movie.vercel.app"
              target="_blank"
              class="bg-blue-500 hover:bg-white text-white hover:text-blue-500 border-blue-500 border-2 font-semibold py-2 px-4 rounded-3xl mr-4 transition duration-300"
            >
              Demo
            </a>
            <a
              href="https://github.com/bima0302/dino-plus-movie"
              target="_blank"
              class="bg-gray-700 hover:bg-white text-white hover:text-gray-700 border-gray-700 border-2 font-semibold py-2 px-4 rounded-3xl transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center m-4">
        {/* TODO: Add Project Details */}
        <div className="container flex content-center flex-wrap h-80 max-w-xl rounded-3xl p-8">
          {/* TODO: Add title */}
          <div class="font-bold text-2xl">Portfolio Website</div>
          {/* TODO: Add description */}
          <div>
            <p class="font-base text-base">My personal portfolio website.</p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Tech Stack:
              <span class="text-blue-500 dark:text-blue-400 ml-2">React</span>,
              <span class="text-green-500 dark:text-green-400">NextJS</span>,
              <span class="text-indigo-500 dark:text-indigo-400">
                Tailwind CSS
              </span>
            </p>
          </div>
          <div class="mt-4">
            <a
              href="https://www.bimasetyo.com/"
              target="_blank"
              class="bg-blue-500 hover:bg-white text-white hover:text-blue-500 border-blue-500 border-2 font-semibold py-2 px-4 rounded-3xl mr-4 transition duration-300"
            >
              Demo
            </a>
            <a
              href="https://github.com/bima0302/portfolio"
              target="_blank"
              class="bg-gray-700 hover:bg-white text-white hover:text-gray-700 border-gray-700 border-2 font-semibold py-2 px-4 rounded-3xl transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* TODO: Add Tumbnail */}
        <div className="container bg-cover bg-center bg-[url('/project-2.webp')] h-80 max-w-xl rounded-3xl transition duration-300 ease-in-out transform hover:scale-105"></div>
      </div>
      {/* See more button */}
      <div className="text-center">
        <a href="http://github.com/bima0302" target="_blank">
          <button className="mt-4 mx-auto px-4 py-2 w-72 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            See more
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
