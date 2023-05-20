import React from "react";

export default function BuyCard() {
  return (
    <div className="mt-28 lg:flex lg:items-center">
      <div className="mx-auto md:mx-0">
        <h2 className="text-[#16215c] text-4xl sm:text-[2.5rem] font-semibold text-start">
          Online, In Store, and On the Go
        </h2>
        <p className="text-gray-500 text-justify my-4">
          Inspiration comes in many ways and you like to save everything from.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button className="btn bg-[#007bcf] mt-8">Learn More</button>
      </div>
      <img
        className="mt-8 ml-auto object-contain lg:w-[450px] lg:-ml-16"
        src="./images/shoppingCart.png"
        alt="Buy online, in store, on go"
      />
    </div>
  );
}
