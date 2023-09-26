import React from "react";

function Projects() {
  return (
    <div id="Projects" className="my-10">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mx-4">My Projects</h1>{" "}
      <div className="flex flex-col md:flex-row items-center justify-center m-4">
        {/* TODO: Add Tumbnail */}
        <div className="container bg-center bg-[url('https://www.frisianflag.com/storage/app/media/uploaded-files/sop-baso.jpg')] h-80 max-w-xl rounded-3xl hover:rounded-[48px]"></div>
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
        </div>
        {/* TODO: Add Tumbnail */}
        <div className="container bg-red-100 h-80 max-w-xl rounded-3xl hover:rounded-[48px]"></div>
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
