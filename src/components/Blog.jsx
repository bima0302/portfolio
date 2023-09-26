import React from "react";

function Blog() {
  return (
    <div id="Blog">
      <h1 className="text-center text-3xl font-bold mx-4 mt-20">
        My Recent Posts
      </h1>{" "}
      {/* Title */}
      <div className="flex flex-col md:flex-row items-center justify-center m-4">
        {/* Card 1 */}
        <div className="container bg-gray-50 hover:bg-blue-100 max-w-sm cursor-pointer h-72 rounded-3xl m-2">
          <div className="bg-blue-200 h-4/6 rounded-3xl"></div>
          <div className="p-4">
            <div className="font-medium text-xl">Post 1</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="container bg-gray-50 hover:bg-blue-100 max-w-sm cursor-pointer h-72 rounded-3xl m-2">
          <div className="bg-blue-200 h-4/6 rounded-3xl"></div>
          <div className="p-4">
            <div className="font-medium text-xl">Post 2</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="container bg-gray-50 hover:bg-blue-100 max-w-sm cursor-pointer h-72 rounded-3xl m-2">
          <div className="bg-blue-200 h-4/6 rounded-3xl"></div>
          <div className="p-4">
            <div className="font-medium text-xl">Post 3</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      {/* See more button */}
      <div className="text-center">
        <a href="http://blog.bimasetyo.com" target="_blank">
          <button className="mt-4 mx-auto px-4 py-2 w-72 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            See more
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
