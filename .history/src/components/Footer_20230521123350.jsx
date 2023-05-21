import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#000018]">
      <div className="pt-20 max-w-[95%] sm:max-w-[75%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto">
        <div>
          <img className="" src="./images/logo.png" alt="oxo logo" />

          <p>
            Inspiration comes in many ways and you like to save everything from.
            sed do eiusmod tempor incididunt .
          </p>
        </div>
        <div className="flex w-full space-x-4 mt-4">
          <input
            className="rounded-lg px-2 py-4 flex-grow"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="btn bg-[#007bcf] ">Submit Now</button>
        </div>
      </div>
    </div>
  );
}
