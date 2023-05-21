import React from "react";

export default function MiddleFooter() {
  return (
    <div className="text-[#7d7a7f] mt-8  flex items-center max-w-[95%] sm:max-w-[75%]  lg:max-w-[85%] 2xl:max-w-[75%] mx-auto">
      <div className="mr-32">
        <h3 className="text-white font-bold">Home Page</h3>
        <div className="mt-4">
          <p>Home</p>
          <p>About</p>
          <p>Causes</p>
          <p>Site Map</p>
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold">Inner Page</h3>
        <div className="mt-4">
          <p>Home</p>
          <p>About</p>
          <p>Causes</p>
          <p>Site Map</p>
        </div>
      </div>
    </div>
  );
}
