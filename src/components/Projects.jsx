import React from "react";

function Projects() {
  return (
    <div id="Projects">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mx-4 mt-20">
        My Projects
      </h1>{" "}
      <div className="flex flex-col md:flex-row items-center justify-center m-4">
        {/* TODO: Add Tumbnail */}
        <div className="container bg-red-100 h-80 max-w-xl rounded-3xl hover:rounded-[48px]"></div>
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
    </div>
  );
}

export default Projects;
