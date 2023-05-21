import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#000018] mt-8">
      <div className="pt-20 max-w-[95%] sm:max-w-[75%] md:max-w-[85%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto md:flex md:items-start">
        <div>
          <img className="" src="./images/logo.png" alt="oxo logo" />

          <p className="text-gray-500 mt-4 md:w-[80%]">
            Inspiration comes in many ways and you like to save everything from.
            sed do eiusmod tempor incididunt .
          </p>
        </div>
        <div className="w-full lg:w-2/3 bg-[#131627] p-10 mt-4 md:mt-0 mx-auto rounded-xl">
          <h3 className="text-white text-xl font-semibold">Newsletter</h3>
          <p className="text-gray-400 mt-2 text-justify">
            Get a bi-weekly digest of great articles
          </p>
          <div className="flex w-full space-x-4 mt-4">
            <input
              className="rounded-full px-4 py-4 flex-grow"
              type="email"
              placeholder="Your email address"
            />
            <button className="btn bg-[#007bcf] rounded-full">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
