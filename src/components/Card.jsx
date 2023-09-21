import React from "react";

function Card() {
  return (
    <div className="flex justify-center m-3 mt-20">
      <div className="w-96 mx-1">
        <div className="bg-blue-100 hover:bg-blue-500 cursor-pointer h-64 p-6 rounded-3xl relative">
          <div className="bg-blue-200 h-44 rounded-3xl absolute inset-0"></div>
        </div>
      </div>
      <div className="w-96 mx-1">
        <div className="bg-blue-100 hover:bg-blue-500 cursor-pointer h-64 p-6 rounded-3xl relative">
          <div className="bg-blue-200 h-44 rounded-3xl absolute inset-0"></div>
        </div>
      </div>
      <div className="w-96 mx-1">
        <div className="bg-blue-100 hover:bg-blue-500 cursor-pointer h-64 p-6 rounded-3xl relative">
          <div className="bg-blue-200 h-44 rounded-3xl absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
