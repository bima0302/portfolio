import React from "react";

function Blog() {
  return (
    <div id="Blog" className="my-10">
      <h1 className="text-center text-3xl font-bold mx-4">My Recent Posts</h1>{" "}
      {/* Title */}
      <div className="flex flex-col lg:flex-row items-center justify-center m-4">
        {/* Card 1 */}
        <div className="container bg-gray-50 hover:bg-blue-100 max-w-sm cursor-pointer h-80 rounded-3xl m-2 transition duration-300">
          <div className="bg-[url('https://blog.bimasetyo.com/static/3c4f7295aec5a359e90b9e6360989751/f058b/2-06.png')] h-4/6 rounded-3xl"></div>
          <div className="p-4">
            <div className="font-base text-xl">Magang Di GoTo</div>
            <p className="text-gray-700 text-base">
              Pengalaman berharga saya selama 6 Bulan Magang dan Studi
              Independen di GoTo.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="container bg-gray-50 hover:bg-blue-100 max-w-sm cursor-pointer h-80 rounded-3xl m-2 transition duration-300">
          <div className="bg-blue-200 h-4/6 rounded-3xl"></div>
          <div className="p-4">
            <div className="font-base text-xl">Bagaimana Cara Belajar?</div>
            <p className="text-gray-700 text-base">
              Berbagi tentang bagaimana caranya belajar dengan benar.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="container bg-gray-50 hover:bg-blue-100 max-w-sm cursor-pointer h-80 rounded-3xl m-2 transition duration-300">
          <div className="bg-blue-200 h-4/6 rounded-3xl"></div>
          <div className="p-4">
            <div className="font-base text-xl">
              Memahami dan Menggunakan Async Function pada JavaScript
            </div>
            <p className="text-gray-700 text-base">
              Penjelasan tentang Async Function.
            </p>
          </div>
        </div>
      </div>
      {/* See more button */}
      <div className="text-center">
        <a href="http://blog.bimasetyo.com" target="_blank">
          <button className="mt-4 mx-auto px-4 py-2 w-72 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            See more
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
