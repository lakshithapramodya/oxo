import React from "react";
import TopFooter from "./TopFooter";

export default function Footer() {
  return (
    <div className="bg-[#000018] mt-8">
      <TopFooter />

      <div className="text-[#7d7a7f] mt-8  flex items-center max-w-[95%] sm:max-w-[75%]  lg:max-w-[85%] 2xl:max-w-[75%] mx-auto">
        <div className="flex-grow">
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

      <div className="flex items-center justify-center mt-8">
        <p className="text-[#7d7a7f] ">
          © Copyrights 2020 Oxo All rights reserved.
        </p>
      </div>
    </div>
  );
}
