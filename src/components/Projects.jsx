import React from "react";

function Projects() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-20 mx-4">
        {/* TODO: Add Tumbnail */}
        <div className="container bg-red-100 h-80 max-w-lg rounded-3xl hover:rounded-[48px]"></div>
        {/* TODO: Add Project Details */}
        <div className="container h-80 max-w-lg rounded-3xl p-8">
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
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center m-4">
        {/* TODO: Add Project Details */}
        <div className="container h-80 max-w-lg rounded-3xl p-8">
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
        <div className="container bg-red-100 h-80 max-w-lg rounded-3xl hover:rounded-[48px]"></div>
      </div>
    </>
  );
}

export default Projects;
