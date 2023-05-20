import React from "react";

export default function BuyCard() {
  return (
    <div className="lg:w-[50%] xl:w-[42%] mx-auto md:mx-0 mt-28">
      <div>
        <h2 className="text-[#16215c] text-4xl sm:text-[2.5rem] font-semibold text-start">
          Online, In Store, and On the Go
        </h2>
        <p className="text-gray-500  text-justify my-4">
          Inspiration comes in many ways and you like to save everything from.
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation.
        </p>
        <button className="btn bg-[#007bcf] mt-8">Learn More</button>
      </div>
      <img src="./images/shoppingCart.png" alt="" />
    </div>
  );
}
