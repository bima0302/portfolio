import React from "react";

function Blog() {
  return (
    <div className="flex justify-center m-3 mt-20">
      {/* TODO: Add card */}
      <div className="w-96 mx-1">
        {/* TODO: Add background */}
        <div className="bg-gray-50 hover:bg-blue-100 cursor-pointer h-72 rounded-3xl">
          {/* TODO: Add image */}
          <div className="bg-blue-200 h-44 w-full rounded-3xl"></div>
          {/* TODO: Add text */}
          <div className="p-6">
            {/* TODO: Add title */}
            <div class="font-medium text-xl">Project 1</div>
            {/* TODO: Add description */}
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
